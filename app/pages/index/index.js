import angular from 'angular';
import angularRouter from 'angular-ui-router';

import indexComponent from './index.component';
import indexService from './index.service';

let indexModule = angular.module('index', [ angularRouter ])
    .config(($stateProvider, $urlRouterProvider) => { 'ngInject';
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index', {
                url: '/',
                component: 'index'
            });
    })
    .service('indexService', indexService)
    .component('indexComponent', indexComponent)
    .name;

export default indexModule;
