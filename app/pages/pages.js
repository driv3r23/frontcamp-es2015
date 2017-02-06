import angular from 'angular';

import Index from './index/index';

let pagesModule = angular.module('app.pages', [
    Index
]).name;

export default pagesModule;
