import template from './add.html'
import controller from './add.controller';

function addDirective() {
    return {
        restrict: 'E',
        scope: {},
        controllerAs: '$add',
        controller,
        template
    }
}

export default addDirective;