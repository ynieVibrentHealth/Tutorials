import React from 'react'
import UserManager from '../UserManager/UserManager'
import SitesManager from './SitesManager'

export default class SitesPage extends React.Component {

    constructor(props) {
        super(props);
        UserManager.loadUser("aa2070@aa.com", "Password123", ((token) => {
            console.log("finished with token: "+token);
            SitesManager.getSites((responseJSON) => {
                let rawSites = [];
                for (let site of responseJSON.sites) {
                    rawSites.push(site)
                }
                let siteIds = this.mapSiteIds(rawSites);
                this.getDetailsForSites(siteIds);
            })
        }));
        this.state = {
            loadedSites:false,
            sitesWithData:[]
        }
    }

    mapSiteIds(rawSites) {
        let siteIds = rawSites.map(function(site, _){
            return {
                "displayName":site.organizationDisplayName,
                "id":site.id
            }
        });
        return siteIds
    }

    getDetailsForSites(siteIds) {
        for (let site of siteIds) {
            SitesManager.getAvailableAppointments(site.id, 60, ((responseJSON) => {
                this.setLoaded();
                if (responseJSON.availableTimes.count > 0) {
                    this.sitesWithData.push(site);
                    console.log(site.organization+" has appointments available")
                }
               console.log(responseJSON.timezone);
            }));
        }
    }

    setLoaded() {
        this.setState({
            loadedSites:true
        })
    }

    addOrganization(site) {
        let currentSites = this.state.loadedSites;
        currentSites.push(site);
        this.setState({
            sitesWithData:currentSites
        })
    }

    render() {
        if (!this.state.loadedSites) {
            return (
                <h1>Loading site information</h1>
            )
        } else {
            return (
                <h1>Loading user</h1>
            )
        }

    }
}