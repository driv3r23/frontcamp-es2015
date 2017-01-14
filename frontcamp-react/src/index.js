import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Posts from './Posts';
import './index.css';

ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/posts" component={Posts}/>
        </Router>
    ),
    document.getElementById('root')
);
