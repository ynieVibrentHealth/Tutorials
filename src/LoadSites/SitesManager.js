import PMINetworkConfig from '../NetworkConfig/PMINetworkConfig'
import UserManager from '../UserManager/UserManager'

class SitesManager {
    getSites(callback) {
        let sitesURL = PMINetworkConfig.baseURL + PMINetworkConfig.donationSites.search;
        fetch(sitesURL, {
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token':UserManager.token
            }
        })
            .then((response) => {
                console.log(response);
                if (response.status >= 200 && response.status <= 305){
                    return response.json()
                }  else if (response.status >= 400 && response.status < 500) {
                    throw "Bad request";
                } else {
                    throw "Internal server error"
                }
            })
            .then((responseJSON) => {
                callback({
                    "json":responseJSON,
                    "error":null
                })
            })
            .catch((error)=> {
                callback({
                    "json":null,
                    "error":error
                });
            })
    }

    getAvailableAppointments(siteId, numberOfDays, callback) {
        let appointmentTimesURL = PMINetworkConfig.baseURL + PMINetworkConfig.donationSites.appointmentTimes+
            "?siteId="+siteId+
            "&numberOfDays="+numberOfDays;
        fetch(appointmentTimesURL, {
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token':UserManager.token
            }
        })
            .then((response) => {
                if (response.status >= 200 && response.status <= 305){
                    return response.json()
                }  else if (response.status >= 400 && response.status < 500) {
                    throw "Bad request";
                } else {
                    throw "Internal server error"
                }
            })
            .then((responseJSON) => {
                callback({
                    "json":responseJSON,
                    "error":null
                })
            })
            .catch((error)=> {
                callback({
                    "json":null,
                    "error":error
                });
            })
    }
}

export default new SitesManager();