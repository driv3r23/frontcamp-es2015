function limitDirective() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attributes, control) {
            control.$validators.custom = function(modelValue) {
                console.log(modelValue);
                return modelValue.length >= 20;
            }
        }
    }
}

export default limitDirective;