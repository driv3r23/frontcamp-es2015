import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router';
import App from './containers/App'
import configureStore from './store/configureStore'

import Post from './components/Post';
import List from './components/List';

import './styles/index.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ hashHistory }>
            <Route path="/" component={ App }>
                <Route path="/posts" component={ List }/>
                <Route path="/posts/:id" component={ Post }/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);