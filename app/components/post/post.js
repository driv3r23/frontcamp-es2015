import angular from 'angular';

import postDirective from './post.directive'
import postFactory from './post.factory';

let postModule = angular.module('post', [])
    .directive('post', postDirective)
    .factory('postFactory', postFactory)
    .name;

export default postModule;
