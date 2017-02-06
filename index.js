/* ReactJS */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './src/containers/App'
import configureStore from './src/store/configureStore'

import Post from './src/components/Post';
import List from './src/components/List';

import './src/styles/index.less';

const store = configureStore();

/*ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/posts" component={ App }>
                <IndexRoute component={ List } />
                <Route path=":id" component={ Post } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);*/

/* AngularJS */
import angular from 'angular'
import angularRouter from 'angular-ui-router'
import angularPages from './app/pages/pages'
import angularComponents from './app/components/components'

angular.module('app', [
    angularRouter,
    angularComponents,
    angularPages
]).config(($locationProvider) => { 'ngInject';
    $locationProvider.html5Mode(true);
});

angular.element(document).ready(() => {
    angular.bootstrap(document.getElementById('container'), ['app']);
});
