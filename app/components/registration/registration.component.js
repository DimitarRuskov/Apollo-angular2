System.register(['angular2/core', 'angular2/common', '../../services/auth.service', '../common/control-message.component', '../../services/validation.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, auth_service_1, control_message_component_1, validation_service_1;
    var RegistrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (control_message_component_1_1) {
                control_message_component_1 = control_message_component_1_1;
            },
            function (validation_service_1_1) {
                validation_service_1 = validation_service_1_1;
            }],
        execute: function() {
            RegistrationComponent = (function () {
                function RegistrationComponent(_authService, _formBuilder) {
                    this._authService = _authService;
                    this._formBuilder = _formBuilder;
                    this.form = this._formBuilder.group({
                        'username': ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6)])],
                        'email': ['', common_1.Validators.compose([common_1.Validators.required, validation_service_1.ValidationService.emailValidator])],
                        'password': ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6)])],
                        'passwordConfirm': ['', common_1.Validators.compose([common_1.Validators.required])]
                    });
                }
                RegistrationComponent.prototype.onSubmit = function (values) {
                    this._authService.register(values);
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/registration/registration.component.html',
                        styleUrls: ['app/components/registration/registration.component.css'],
                        providers: [auth_service_1.AuthService],
                        directives: [control_message_component_1.ControlMessage]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, common_1.FormBuilder])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map