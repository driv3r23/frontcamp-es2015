import angular from 'angular';
import angularRouter from 'angular-ui-router';

import indexComponent from './index.component';
import indexFactory from './index.factory';

let indexModule = angular.module('index', [ angularRouter ])
    .config(($stateProvider, $urlRouterProvider) => { 'ngInject';
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index', {
                url: '/',
                component: 'indexComponent'
            });
    })
    .component('indexComponent', indexComponent)
    .factory('indexFactory', indexFactory)
    .name;

export default indexModule;