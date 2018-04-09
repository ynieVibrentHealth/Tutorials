import PMINetworkConfig from '../NetworkConfig/PMINetworkConfig'
import UserManager from '../UserManager/UserManager'

class SitesManager {
    getSites(callback) {
        let sitesURL = PMINetworkConfig.baseURL + PMINetworkConfig.donationSites.search
        fetch(sitesURL, {
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token':UserManager.token
            }
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                callback(responseJSON)
            })
            .catch((error)=> {
                console.log(error)
            })
    }
}

export default new SitesManager();