using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Ganss.IO;

namespace CSharpModelsToJson
{
    class File
    {
        public string FileName { get; set; }
        public IEnumerable<Model> Models { get; set; }
        public IEnumerable<Enum> Enums { get; set; }
        public IEnumerable<Enumeration> Enumerations { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;
            IConfiguration config = new ConfigurationBuilder()
                .AddJsonFile(args[0], true, true)
                .Build();

            List<string> includes = new List<string>();
            List<string> excludes = new List<string>();

            config.Bind("include", includes);
            config.Bind("exclude", excludes);

            List<File> files = new List<File>();

            foreach (string fileName in getFileNames(includes, excludes)) {
                files.Add(parseFile(fileName));
            }

            string json = JsonConvert.SerializeObject(files, Formatting.Indented);
            System.Console.WriteLine(json);
        }

        static List<string> getFileNames(List<string> includes, List<string> excludes) {
            List<string> fileNames = new List<string>();

            foreach (var path in expandGlobPatterns(includes)) {
                fileNames.Add(path);
            }

            foreach (var path in expandGlobPatterns(excludes)) {
                fileNames.Remove(path);
            }

            return fileNames;
        }

        static List<string> expandGlobPatterns(List<string> globPatterns) {
            List<string> fileNames = new List<string>();

            foreach (string pattern in globPatterns) {
                var paths = Glob.Expand(pattern);

                foreach (var path in paths) {
                    fileNames.Add(path.FullName);
                }
            }

            return fileNames;
        }

        static File parseFile(string path) {
            string source = System.IO.File.ReadAllText(path);
            SyntaxTree tree = CSharpSyntaxTree.ParseText(source);
            var root = (CompilationUnitSyntax) tree.GetRoot();
 
            var modelCollector = new ModelCollector();
            var enumCollector = new EnumCollector();
            var enumerationCollector = new EnumerationCollector();

            modelCollector.Visit(root);
            enumCollector.Visit(root);
            enumerationCollector.Visit(root);

            return new File() {
                FileName = System.IO.Path.GetFullPath(path),
                Models = modelCollector.Models,
                Enums = enumCollector.Enums,
                Enumerations = enumerationCollector.Enumerations.Where(p => p.Values.Any())
            };
        }
    }
}