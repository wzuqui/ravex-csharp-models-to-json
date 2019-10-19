using System.Collections.Generic;
using System.Linq;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CSharpModelsToJson
{
    public class Enumeration
    {
        public string Identifier { get; set; }
        public IEnumerable<string> Values { get; set; }
    }
    
    /// <summary>
    /// https://docs.microsoft.com/pt-br/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/enumeration-classes-over-enum-types
    /// </summary>
    public class EnumerationCollector : CSharpSyntaxWalker
    {
        public readonly List<Enumeration> Enumerations = new List<Enumeration>();

        public override void VisitClassDeclaration(ClassDeclarationSyntax node)
        {
            var enumeration = GetEnumeration(node);
            Enumerations.Add(enumeration);
        }

        private static Enumeration GetEnumeration(TypeDeclarationSyntax node)
        {
            return new Enumeration
            {
                Identifier = $"{node.Identifier.ToString()}{node.TypeParameterList}",
                Values = node.Members.OfType<FieldDeclarationSyntax>()
                    .Where(field => field.Modifiers.Any(SyntaxKind.StaticKeyword))
                    .Select(field => $"static {field.Declaration.Variables.First().GetText()}")
            };
        }
    }
}