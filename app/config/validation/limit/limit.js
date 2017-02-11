import angular from 'angular';

import limitDirective from './limit.directive'

let limitModule = angular.module('limit', [])
    .directive('limit', limitDirective)
    .name;

export default limitModule;
