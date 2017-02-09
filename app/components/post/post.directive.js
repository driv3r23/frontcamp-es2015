import template from './post.html'
import controller from './post.controller';

function postDirective() {
    return {
        restrict: 'E',
        controllerAs: '$post',
        controller,
        template
    }
}

export default postDirective;