import PMINetworkConfig from '../NetworkConfig/PMINetworkConfig'

class UserManager {
    get token() {
        return this._token
    }

    set token(value) {
        this._token = value
    }

    constructor() {
        this._type = 'UserManager';
        this._token = "";
    }

    loadUser(username, password, callback) {
    let loginURL = PMINetworkConfig.baseURL+PMINetworkConfig.authentication.login
        +"?username="+username+"&password="+password;
    fetch(loginURL, {
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            if (response.status >= 200 && response.status <= 305){
                return response.json()
            }  else if (response.status >= 400 && response.status < 500) {
                throw "Please try again, credentials are not correct";
            } else {
                throw "Internal server error"
            }
        })
        .then((responseJSON) => {
            console.log("status code: "+responseJSON.status);
            this.token = responseJSON.token;
            callback({
               "json":responseJSON,
               "error":null
            });
        })
        .catch((error)=> {
            callback({
                "json":null,
                "error":error
            });
        })
}
    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
}

export default new UserManager();

