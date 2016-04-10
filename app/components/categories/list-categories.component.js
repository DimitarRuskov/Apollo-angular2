System.register(['angular2/core', './category.component', '../../services/category.service'], function(exports_1, context_1) {
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
    var core_1, category_component_1, category_service_1;
    var ListCategoriesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_component_1_1) {
                category_component_1 = category_component_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }],
        execute: function() {
            ListCategoriesComponent = (function () {
                function ListCategoriesComponent(_categoryService) {
                    var _this = this;
                    this._categoryService = _categoryService;
                    this.categories = [];
                    this._categoryService.listCategories({})
                        .subscribe(function (data) { return _this.categories = data.categories; }, function (err) { return console.log(err); }, function () { return console.log('done'); });
                }
                ListCategoriesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/categories/list-categories.component.html',
                        styleUrls: ['app/components/categories/list-categories.component.css'],
                        directives: [category_component_1.CategoryComponent],
                        providers: [category_service_1.CategoryService]
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService])
                ], ListCategoriesComponent);
                return ListCategoriesComponent;
            }());
            exports_1("ListCategoriesComponent", ListCategoriesComponent);
        }
    }
});
//# sourceMappingURL=list-categories.component.js.map