System.register(['angular2/core', './recipe.component', '../../models/recipe.model'], function(exports_1, context_1) {
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
    var core_1, recipe_component_1, recipe_model_1;
    var ListRecipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_component_1_1) {
                recipe_component_1 = recipe_component_1_1;
            },
            function (recipe_model_1_1) {
                recipe_model_1 = recipe_model_1_1;
            }],
        execute: function() {
            ListRecipesComponent = (function () {
                function ListRecipesComponent() {
                    this.recipes = [];
                    var model1 = new recipe_model_1.RecipeModel();
                    model1.id = 1;
                    model1.author = 'Dimitar Ruskov';
                    model1.comments = 4;
                    model1.createdAt = new Date().toISOString();
                    model1.content = 'Preheat oven to 375 degrees F. Lightly coat an 8-inch-square nonstick baking pan with cooking spray. In a small bowl, whisk together egg, egg white, yogurt, and vanilla extract; set aside.';
                    model1.title = 'Big Fudgy Bittersweet Brownies';
                    model1.thumbsUp = 4;
                    model1.thumbsDown = 0;
                    this.recipes.push(model1);
                    var model2 = new recipe_model_1.RecipeModel();
                    model2.id = 1;
                    model2.author = 'Martin Ruskov';
                    model2.comments = 24;
                    model2.createdAt = new Date().toISOString();
                    model2.content = 'For longer lasting balls I suggest storing them in the freezer! What I do is place a piece of parchment paper on a baking sheet and spread the balls out on the sheet. I pop them in the freezer for about an hour or two before transferring into a gallon-size bag. They should stay good for a few months!';
                    model2.title = 'APPLE CHAI ENERGY BALLS';
                    model2.thumbsUp = 18;
                    model2.thumbsDown = 2;
                    this.recipes.push(model2);
                }
                ListRecipesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/recipes/list-recipes.component.html',
                        styleUrls: ['app/components/recipes/list-recipes.component.css'],
                        directives: [recipe_component_1.RecipeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListRecipesComponent);
                return ListRecipesComponent;
            }());
            exports_1("ListRecipesComponent", ListRecipesComponent);
        }
    }
});
//# sourceMappingURL=list-recipes.component.js.map