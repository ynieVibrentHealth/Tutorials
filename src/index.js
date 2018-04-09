import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SitesPage from './LoadSites/SitesPage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SitesPage />, document.getElementById('root'));
registerServiceWorker();
