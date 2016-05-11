import {Component, Input} from '@angular/core';
import {RecipeModel} from './../recipe.model';

@Component({
    templateUrl:        'app/components/recipes/add/add-recipe.component.html',
    styleUrls:          ['app/components/recipes/add/add-recipe.component.css']
})

export class AddRecipeComponent {
    newIngredient:string;
    newPrepStep:string;
    private _ingredients:string[];
    private _prepSteps: string[];
    constructor() {
        this._ingredients = [];
        this._prepSteps = [];
     }
     
     addIngredient(newIngredient) {
         this._ingredients.push(newIngredient);
         this.newIngredient = '';
     }
     
     deleteIngredient(index) {
         this._ingredients.splice(index, 1);
     }
     
     addPrepStep(newPrepStep) {
         this._prepSteps.push(newPrepStep);
         this.newPrepStep = '';
     }
     
     deletePrepStep(index) {
         this._prepSteps.splice(index, 1);
     }
}