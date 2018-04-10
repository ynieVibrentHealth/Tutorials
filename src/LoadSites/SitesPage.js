import React from 'react'
import UserManager from '../UserManager/UserManager'
import SitesManager from './SitesManager'

export default class SitesPage extends React.Component {
    sites = [];

    constructor(props) {
        super(props);
        UserManager.loadUser("aa2070@aa.com", "Password123", ((token) => {
            console.log("finished with token: "+token);
            SitesManager.getSites((responseJSON) => {
                for (let site of responseJSON) {
                    console.log(site.toString());
                    this.sites.push(site)
                }
                this.getDetailsForSites()
            })
        }))
    }

    getDetailsForSites() {
        for (let site of this.sites) {

        }
    }

    render() {
        return (
            <h1>Loading user</h1>
        )
    }
}