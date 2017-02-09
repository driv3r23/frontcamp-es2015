import angular from 'angular';

import Index from './index/index';
import Add from './posts/add/add';
import Edit from './posts/edit/edit';

let pagesModule = angular.module('app.pages', [
    Index,
    Add,
    Edit
]).name;

export default pagesModule;
