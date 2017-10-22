const refParser = require('json-schema-ref-parser')
const fs = require('fs')
const schemaToTS = require('json-schema-to-typescript')

function buildTypeTree(obj, tree = {}) {
    for (const propertyName of Object.keys(obj.properties)) {
        const property = obj.properties[propertyName]

        if (property.type === 'object') {
            tree[propertyName] = buildTypeTree(property, {});
        } else {
            tree[propertyName] = property.type;
        }
    }
    return tree;
}

function buildTypeTreeString(modelName) {
    return refParser.dereference(`./lib/schemas/${modelName}.json`)
        .then(buildTypeTree)
        .then((buildTypeObj) => `    ${firstLetterToUpperCase(modelName)}: ${JSON.stringify(buildTypeObj)},`)
}

const firstLetterToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);

function buildModelsImporterString(modelNames) {
    return modelNames.map((modelName) =>
        `export { ${firstLetterToUpperCase(modelName)} } from './${modelName}'\n`
    )
}

fs.readdir('./lib/schemas', (err, files) => {
    files.forEach((fileName) => {
        schemaToTS.compileFromFile(`./lib/schemas/${fileName}`)
            .then((ts) => fs.writeFile(`./lib/models/${fileName.slice(0, -5)}.d.ts`, ts))
    })

    const modelNames = files.map((fileName) => fileName.slice(0, -5))

    Promise.all(modelNames.map(buildTypeTreeString))
        .then((typeStrings) => {
            const data = [
                buildModelsImporterString(modelNames),
                'export const types = {',
                typeStrings.join('\n'),
                '}'
            ].join('\n');

            fs.writeFile('./lib/models/index.ts', data)
    })
})
