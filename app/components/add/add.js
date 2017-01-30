import angular from 'angular';

import addDirective from './add.directive'

let addModule = angular.module('add', [])
    .directive('add', addDirective)
    .name;

export default addModule;
