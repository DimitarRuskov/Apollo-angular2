System.register(['angular2/core', '../../models/category.model', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, category_model_1, router_1;
    var CategoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_model_1_1) {
                category_model_1 = category_model_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CategoryComponent = (function () {
                function CategoryComponent(_router) {
                    this._router = _router;
                }
                CategoryComponent.prototype.listRoutines = function (categoryId) {
                    this._router.navigate(['Routines', { categoryId: categoryId }]);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', category_model_1.CategoryModel)
                ], CategoryComponent.prototype, "category", void 0);
                CategoryComponent = __decorate([
                    core_1.Component({
                        selector: 'apollo-routine',
                        templateUrl: 'app/components/categories/category.component.html',
                        styleUrls: ['app/components/categories/category.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], CategoryComponent);
                return CategoryComponent;
            }());
            exports_1("CategoryComponent", CategoryComponent);
        }
    }
});
//# sourceMappingURL=routine.component.js.map