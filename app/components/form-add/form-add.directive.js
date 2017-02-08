import template from './form-add.html'
import controller from './form-add.controller';

function formAddDirective() {
    return {
        restrict: 'E',
        scope: {},
        controllerAs: '$form',
        controller,
        template
    }
}

export default formAddDirective;