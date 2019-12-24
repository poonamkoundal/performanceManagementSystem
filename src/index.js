/*
 * @file: index.js
 * @description: It is main app file .
 * @author: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('admin'));
registerServiceWorker();
