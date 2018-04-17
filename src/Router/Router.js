import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import SitesPage from "../LoadSites/SitesPage"
import LoginPage from "../login/LoginPage"

export default class ScheduleAvailableTimeApp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={"/login"} component={LoginPage}/>
                    <Route path={"/getTimes"} component={SitesPage}/>
                    <Redirect from={"/"} to={'/login'}/>
                </div>
            </Router>
        )
    }
}

