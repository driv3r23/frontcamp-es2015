import angular from 'angular';
import angularRouter from 'angular-ui-router';

import editComponent from './edit.component';

let editModule = angular.module('edit', [ angularRouter ])
    .config(($stateProvider) => { 'ngInject';
        $stateProvider
            .state('edit', {
                url: '/posts/edit/:postKey',
                component: 'editComponent'
            });
    })
    .component('editComponent', editComponent)
    .name;

export default editModule;