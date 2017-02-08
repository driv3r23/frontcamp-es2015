import angular from 'angular';

import Index from './index/index';
import Add from './posts/add/add';

let pagesModule = angular.module('app.pages', [
    Index,
    Add
]).name;

export default pagesModule;
