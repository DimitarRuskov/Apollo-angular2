System.register(['angular2/core', 'angular2/common', '../common/control-message.component', '../../services/validation.service', '../../models/profile.model', '../../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, common_1, control_message_component_1, validation_service_1, profile_model_1, auth_service_1;
    var EditProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (control_message_component_1_1) {
                control_message_component_1 = control_message_component_1_1;
            },
            function (validation_service_1_1) {
                validation_service_1 = validation_service_1_1;
            },
            function (profile_model_1_1) {
                profile_model_1 = profile_model_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            EditProfileComponent = (function () {
                function EditProfileComponent(_formBuilder, element, _authService) {
                    this._formBuilder = _formBuilder;
                    this.element = element;
                    this._authService = _authService;
                    this._selectedImage = null;
                    this.profileDetails = new profile_model_1.ProfileModel();
                }
                EditProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._authService.getProfile({})
                        .subscribe(function (data) { return _this.populateForm(data.profileDetails); }, function (err) { return console.log(err); }, function () { return console.log('Successfully fetched data'); });
                    this.form = this._formBuilder.group({
                        'image': ['', common_1.Validators.compose([])],
                        'name': ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6)])],
                        'email': ['', common_1.Validators.compose([common_1.Validators.required, validation_service_1.ValidationService.emailValidator])],
                        'dateOfBirth': ['', common_1.Validators.compose([])],
                        'weight': ['', common_1.Validators.compose([])],
                        'height': ['', common_1.Validators.compose([])]
                    });
                };
                EditProfileComponent.prototype.populateForm = function (profileDetails) {
                    this.profileDetails = profileDetails;
                    this.form.controls['name'].updateValue(this.profileDetails.name);
                    this.form.controls['email'].updateValue(this.profileDetails.email);
                    this.form.controls['dateOfBirth'].updateValue(this.profileDetails.dateOfBirth);
                    this.form.controls['weight'].updateValue(this.profileDetails.weight);
                    this.form.controls['height'].updateValue(this.profileDetails.height);
                };
                EditProfileComponent.prototype.changeListener = function (event) {
                    var reader = new FileReader();
                    var image = this.element.nativeElement.querySelector('.image');
                    reader.onload = function (e) {
                        var src = e.target.result;
                        this.form.controls['image'].updateValue(src);
                        image.src = src;
                    }.bind(this);
                    reader.readAsDataURL(event.target.files[0]);
                };
                EditProfileComponent.prototype.onSubmit = function (values) {
                    if (values.image === '') {
                        values.image = undefined;
                    }
                    this._authService.updateProfile(values);
                };
                EditProfileComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/profile/edit-profile.component.html',
                        styleUrls: ['app/components/profile/edit-profile.component.css'],
                        providers: [auth_service_1.AuthService],
                        directives: [control_message_component_1.ControlMessage]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, core_1.ElementRef, auth_service_1.AuthService])
                ], EditProfileComponent);
                return EditProfileComponent;
            }());
            exports_1("EditProfileComponent", EditProfileComponent);
        }
    }
});
//# sourceMappingURL=edit-profile.component.js.map