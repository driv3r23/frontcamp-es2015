import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import PostsController from './PostsController';
import './index.css';

ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/posts(/:postId)" component={PostsController}/>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);
