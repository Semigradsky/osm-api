import request from './lib/request'
import { convert } from './lib/converter'

import * as models from './lib/models'
import { Capabilities } from './lib/models'

class API {

    capabilities = {
        /**
         * Provide information about the capabilities and limitations of the current API
         */
        get(): Promise<Capabilities> {
            return request.get('capabilities')
                .then(data => data.api)
                .then(convert('Capabilities'));
        }
    }

}

export default API



/* Test of usage */
const api = new API()
api.capabilities.get().then((res) => {
    console.log(res)
})
