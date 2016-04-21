System.register(['angular2/core', 'angular2/common', '../../services/validation.service', '../../services/profile.service'], function(exports_1, context_1) {
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
    var core_1, common_1, validation_service_1, profile_service_1;
    var EditProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validation_service_1_1) {
                validation_service_1 = validation_service_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            EditProfileComponent = (function () {
                function EditProfileComponent(_formBuilder, element, _profileService) {
                    this._formBuilder = _formBuilder;
                    this.element = element;
                    this._profileService = _profileService;
                    this._selectedImage = null;
                    this.form = this._formBuilder.group({
                        'name': ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6)])],
                        'email': ['', common_1.Validators.compose([common_1.Validators.required, validation_service_1.ValidationService.emailValidator])]
                    });
                }
                EditProfileComponent.prototype.changeListner = function (event) {
                    var reader = new FileReader();
                    var image = this.element.nativeElement.querySelector('.image');
                    reader.onload = function (e) {
                        var src = e.target.result;
                        this._selectedImage = src;
                        image.src = src;
                    }.bind(this);
                    reader.readAsDataURL(event.target.files[0]);
                };
                EditProfileComponent.prototype.onSubmit = function (values) {
                    values.image = this._selectedImage;
                    this._profileService.updateProfile(values);
                };
                EditProfileComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/profile/edit-profile.component.html',
                        styleUrls: ['app/components/profile/edit-profile.component.css'],
                        providers: [profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, core_1.ElementRef, profile_service_1.ProfileService])
                ], EditProfileComponent);
                return EditProfileComponent;
            }());
            exports_1("EditProfileComponent", EditProfileComponent);
        }
    }
});
//# sourceMappingURL=edit-profile.component.js.map