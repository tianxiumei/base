import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import routes from '../src/routes/index.js';
import {
	Router,
	Route,
	hashHistory
} from 'react-router';
ReactDOM.render(<Router history={hashHistory} routes={routes}></Router>, document.getElementById('root'));
