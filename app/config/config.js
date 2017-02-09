import angular from 'angular'

import limitValidator from './validation/limit/limit'

let componentModule = angular.module('app.config', [
    limitValidator
]).name;

export default componentModule;