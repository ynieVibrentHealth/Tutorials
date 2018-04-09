import React from 'react'
import UserManager from '../UserManager/UserManager'

export default class SitesPage extends React.Component {
    constructor(props) {
        super(props);
        UserManager.loadUser("aa2070@aa.com", "Password123", ((token) => {
            console.log("finished with token: "+token)
        }))
    }



    render() {
        return (
            <h1>Loading user</h1>
        )
    }
}