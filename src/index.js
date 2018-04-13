import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SitesPage from './LoadSites/SitesPage'
import registerServiceWorker from './registerServiceWorker';
// import LoginPage from './login/LoginPage'
import ScheduleAvailableTimeApp from './Router/Router'
//ReactDOM.render(<SitesPage />, document.getElementById('root'));

ReactDOM.render(<ScheduleAvailableTimeApp/>, document.getElementById('root'));
registerServiceWorker();
