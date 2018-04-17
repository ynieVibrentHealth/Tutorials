import React from 'react'
import {
    Redirect
} from "react-router-dom";
import UserManager from '../UserManager/UserManager'
import SitesManager from './SitesManager'

function ListOfSites(props) {
    const sites = props.sites;
    const listSites = sites.map((sites) =>
        <li key={sites.id}>name: {sites.displayName} id: {sites.id}</li>
    );
    return (
        <ul>{listSites}</ul>
    )
}

function ListOfAvailableSites(props) {
    const sites = props.sites;
    const availableAppointmentSites = sites.map((site) =>
        <li key={site.id}>name: <b>{site.displayName}</b>, id: <b>{site.id}</b>, number of appointments: <b>{site.appointmentTimes.length}</b>, TimeZone: <b>{site.timeZone}</b></li>
    );

    return (
        <ul>{availableAppointmentSites}</ul>
    )
}

export default class SitesPage extends React.Component {

    constructor() {
        super();

        SitesManager.getSites((response) => {
            if (response.error != null) {
                console.log("have error" + response.error);
                this.setLoaded();
                this.setState({
                    error:response.error
                })
            } else {
                console.log("loaded sites"+response.json.sites);
                let rawSites = [];
                for (let site of response.json.sites) {
                    rawSites.push(site)
                }
                let siteIds = this.mapSiteIds(rawSites);
                this.getDetailsForSites(siteIds);
            }

        });
        this.state = {
            error:null,
            loadedSites:false,
            sitesWithData:[],
            sitesWithoutData:[],
            sitesWithError:[]
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
            console.log(site.id);
            SitesManager.getAvailableAppointments(site.id, 60, ((response) => {
                this.setLoaded();
                if (response.error != null) {
                    let sitesWithError = this.state.sitesWithError;
                    sitesWithError.push(site);
                    this.setState({
                       sitesWithError:sitesWithError
                    });
                }else if (response.json.availableTimes.length > 0) {
                    let sitesWithAppointments = this.state.sitesWithData;
                    let appointmentSite = {
                        "id":site.id,
                        "displayName":site.displayName,
                        "appointmentTimes":response.json.availableTimes,
                        "timeZone":response.json.timezone
                    };
                    sitesWithAppointments.push(appointmentSite);
                    this.setState({
                        sitesWithData:sitesWithAppointments
                    });
                } else {
                    let sitesWithoutAppointments = this.state.sitesWithoutData;
                    sitesWithoutAppointments.push(site);
                    this.setState({
                        sitesWithoutData:sitesWithoutAppointments
                    });
                }
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
        if (UserManager.token.length < 1) {
            return(
                <Redirect to={'/login'}></Redirect>
            )
        }else if (!this.state.loadedSites) {
            return (
                <h1>Loading site information</h1>
            )
        } else if (this.state.error != null ) {
            return (
                <h1>There's an error</h1>
            )
        } else {
            return (
                <div>
                    <h2>Sites With appointments:</h2>
                    <ListOfAvailableSites sites={this.state.sitesWithData}/>
                    <h2>Sites Without appointments:</h2>
                    <ListOfSites sites={this.state.sitesWithoutData}/>
                    <h2>Sites With error:</h2>
                    <ListOfSites sites={this.state.sitesWithError}/>
                </div>

            )
        }

    }
}