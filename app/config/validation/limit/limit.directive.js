function limitDirective() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$validators.limit = function(modelValue) {
                return modelValue.length >= 20;
            }
        }
    }
}

export default limitDirective;