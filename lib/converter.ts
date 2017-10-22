import { types } from './models'

const parseNumbers = (str: string): string | number => {
    if (!isNaN(+str)) {
        return +str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
    }
    return str;
}

const parsers = {
    'number': parseNumbers,
    'integer': parseNumbers
}

function convertTypes(data: any, types: any) {
    for (const propertyName of Object.keys(data)) {
        if (!(propertyName in types)) {
            console.error(`Not found: ${propertyName}`)
            continue
        }

        if (typeof data[propertyName] === 'object') {
            convertTypes(data[propertyName], types[propertyName])
            continue
        }

        const propertyType = types[propertyName];

        if (propertyType in parsers) {
            data[propertyName] = (parsers as any)[propertyType](data[propertyName])
        }
    }

    return data;
}

const nameToLowerCamelCase = (name: string) => {
    return name.toLowerCase().replace(/-(.)/g, (_, group1) => group1.toUpperCase());
}

export const convert = (modelName: string) => {
    return (data: any): Promise<any> => {
        if (!(modelName in types)) {
            throw `Not founded '${modelName}' type.`
        }

        // return data;

        return convertTypes(data, (types as any)[modelName]);
    }
}
