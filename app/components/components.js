import angular from 'angular'

import addComponent from './add/add'

let componentModule = angular.module('app.components', [
    addComponent
]).name;

export default componentModule;