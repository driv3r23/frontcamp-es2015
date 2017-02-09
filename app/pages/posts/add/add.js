import angular from 'angular';
import angularRouter from 'angular-ui-router';

import addComponent from './add.component';

let addModule = angular.module('add', [ angularRouter ])
    .config(($stateProvider) => { 'ngInject';
        $stateProvider
            .state('add', {
                url: '/posts/add',
                component: 'addComponent'
            });
    })
    .component('addComponent', addComponent)
    .name;

export default addModule;