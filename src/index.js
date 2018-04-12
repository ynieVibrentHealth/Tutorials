import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SitesPage from './LoadSites/SitesPage'
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './login/LoginPage'

//ReactDOM.render(<SitesPage />, document.getElementById('root'));
ReactDOM.render(<LoginPage />, document.getElementById('root'));
registerServiceWorker();
