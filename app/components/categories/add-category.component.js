System.register(['angular2/core', '../../services/category.service', '../../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, category_service_1, auth_service_1;
    var AddCategoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AddCategoryComponent = (function () {
                function AddCategoryComponent(element, _categoryService, _auth) {
                    this.element = element;
                    this._categoryService = _categoryService;
                    this._auth = _auth;
                    this._selectedImage = null;
                }
                AddCategoryComponent.prototype.changeListner = function (event) {
                    var reader = new FileReader();
                    var image = this.element.nativeElement.querySelector('.image');
                    reader.onload = function (e) {
                        var src = e.target.result;
                        this._selectedImage = src;
                        image.src = src;
                    }.bind(this);
                    reader.readAsDataURL(event.target.files[0]);
                };
                AddCategoryComponent.prototype.onSubmit = function (values) {
                    values.image = this._selectedImage;
                    this._categoryService.addCategory(values);
                };
                AddCategoryComponent.prototype.routerOnActivate = function (next, prev) {
                    this._auth.doAuth(next);
                };
                AddCategoryComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/categories/add-category.component.html',
                        styleUrls: ['app/components/categories/add-category.component.css'],
                        providers: [category_service_1.CategoryService, auth_service_1.AuthService]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, category_service_1.CategoryService, auth_service_1.AuthService])
                ], AddCategoryComponent);
                return AddCategoryComponent;
            }());
            exports_1("AddCategoryComponent", AddCategoryComponent);
        }
    }
});
//# sourceMappingURL=add-category.component.js.map