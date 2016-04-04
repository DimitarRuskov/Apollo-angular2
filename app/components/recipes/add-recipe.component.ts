import {Component} from 'angular2/core';
import {RecipeModel} from '../../models/recipe.model';

@Component({
    templateUrl:        'app/components/recipes/add-recipe.component.html',
    styleUrls:          ['app/components/recipes/add-recipe.component.css']
})

export class AddRecipeComponent {
    private _ingredients:string[];
    constructor() {
        this._ingredients = [];
     }
     
     addIngredient(newIngredient) {
         this._ingredients.push(newIngredient);
     }
}