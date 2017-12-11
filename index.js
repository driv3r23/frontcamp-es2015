/* ReactJS */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './src/containers/App'
import configureStore from './src/store/configureStore'

import Post from './src/components/Post';
import List from './src/components/List';

import './src/styles/index.less';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <App>
            <BrowserRouter>
                <Switch>
                    <Route path="/:id" component={ Post } />
                    <Route path="/" component={ List } />
                </Switch>
            </BrowserRouter>
        </App>
    </Provider>,
    document.getElementById('container')
);

/* AngularJS */
/*
import angular from 'angular'
import angularRouter from '@uirouter/angularjs'
import angularPages from './app/pages/pages'
import angularComponents from './app/components/components'
import angularConfig from './app/config/config'

angular.module('app', [
    angularRouter,
    angularComponents,
    angularPages,
    angularConfig
]).config(($locationProvider) => { 'ngInject';
    $locationProvider.html5Mode(true);
});

angular.element(document).ready(() => {
    angular.bootstrap(document.getElementById('container'), ['app']);
});
*/