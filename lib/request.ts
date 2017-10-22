import * as fetch from 'isomorphic-fetch'
import * as xml2js from 'xml2js'
import * as models from './models'

const HOSTNAME = 'master.apis.dev.openstreetmap.org'

const nameToLowerCamelCase = (name: string) => {
    return name.toLowerCase().replace(/[_-](.)/g, (_, group1) => group1.toUpperCase());
}

const parseXml = (xmlString: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xmlString, {
            mergeAttrs: true,
            explicitArray: false,
            tagNameProcessors: [nameToLowerCamelCase],
            attrNameProcessors: [nameToLowerCamelCase]
        }, (err, result) => {
            if (err) {
                return reject(err)
            }

            resolve(result.osm)
        })
    })
}

const request = {
    get(path: string): Promise<any> {
        return fetch(`https://master.apis.dev.openstreetmap.org/api/0.6/${path}`)
            .then((response) => response.text())
            .then(parseXml)
    }
}

export default request
