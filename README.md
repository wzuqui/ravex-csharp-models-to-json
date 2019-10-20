# C# models to TypeScript

Essa é uma ferramenta que consome seus modelos e tipos de domínio C # e cria a partir deles arquivos de declaração TypeScript. Há outras ferramentas que fazem isso, mas o que diferencia essa empresa é que ela usa internamente [Roslyn (the .NET compiler platform)](https://github.com/dotnet/roslyn) para analisar os arquivos de origem, o que elimina a necessidade para criar e manter nosso próprio analisador.

## Dependências

* [.NET Core SDK](https://www.microsoft.com/net/download/macos)

## Instalar

```
$ yarn install --save ravex-csharp-models-to-typescript
```

## Como usar

1. Adicione um arquivo de configuração ao seu projeto que contenha, por exemplo...

```
{
    "include": [
        "./models/**/*.cs",
        "./enums/**/*.cs"
    ],
    "exclude": [
        "./models/foo/bar.cs"
    ],
    "output": "./api.d.ts",
    "camelCase": false,
    "camelCaseEnums": false,
    "numericEnums": false,
    "stringLiteralTypesInsteadOfEnums": false,
    "customTypeTranslations": {
        "ProductName": "string",
        "ProductNumber": "string"
    }
}
```

2. Adicione um script npm ao seu package.json que faça referência ao seu arquivo de configuração...

```
"scripts": {
    "generate-types": "ravex-csharp-models-to-typescript --config=your-config-file.json"
},
```

3. Execute o script npm `generate-types` e o arquivo de saída especificado em sua configuração deve ser criado e preenchido com seus modelos.

## Licença

MIT © [Willian Luis Zuqui ](http://gitlab.ravex.local/willian.zuqui)