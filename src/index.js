import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App'
import configureStore from './store/configureStore'

import Post from './components/Post';
import List from './components/List';

import './styles/index.less';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/posts" component={ App }>
                <IndexRoute component={ List } />
                <Route path=":id" component={ Post } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);