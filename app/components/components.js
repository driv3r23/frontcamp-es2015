import angular from 'angular'

import formAddComponent from './form-add/form-add'

let componentModule = angular.module('app.components', [
    formAddComponent
]).name;

export default componentModule;