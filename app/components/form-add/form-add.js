import angular from 'angular';

import formAddDirective from './form-add.directive'

let formAddModule = angular.module('form', [])
    .directive('formAdd', formAddDirective)
    .name;

export default formAddModule;
