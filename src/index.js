import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './TickTacToe/Game'
import MainPage from './EggHeadTutorials/BasicReact/MainPage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<MainPage/>, document.getElementById('basic-tutorial'));
registerServiceWorker();
