import angular from 'angular'

import postComponent from './post/post'
import navigationComponent from './navigation/navigation'

let componentModule = angular.module('app.components', [
    postComponent,
    navigationComponent
]).name;

export default componentModule;