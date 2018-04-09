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
        .then((response) => response.json())
        .then((responseJSON) => {
            this.token = responseJSON.token;
            callback(responseJSON.token)
        })
        .catch((error)=> {
            console.error(error);
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

