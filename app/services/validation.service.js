System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ValidationService;
    return {
        setters:[],
        execute: function() {
            ValidationService = (function () {
                function ValidationService() {
                }
                ValidationService.getValidatorErrorMessage = function (code) {
                    var config = {
                        'required': 'Required',
                        'minlength': 'Invalid length(below the minimum characters)',
                        'maxlength': 'Invalid length(above the maximum characters)',
                        'invalidEmailAddress': 'Invalid email address',
                        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
                    };
                    return config[code] || 'Validation error';
                };
                ValidationService.emailValidator = function (control) {
                    // RFC 2822 compliant regex
                    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                        return null;
                    }
                    else {
                        return { 'invalidEmailAddress': true };
                    }
                };
                return ValidationService;
            }());
            exports_1("ValidationService", ValidationService);
        }
    }
});
//# sourceMappingURL=validation.service.js.map