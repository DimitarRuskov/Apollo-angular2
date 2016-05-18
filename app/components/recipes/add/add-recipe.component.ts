import {Component} from '@angular/core';
import {AuthService} from 'shared/services/auth.service';

@Component({
    templateUrl:        'app/components/recipes/add/add-recipe.component.html',
    styleUrls:          ['app/components/recipes/add/add-recipe.component.css']
})

export class AddRecipeComponent {
    newIngredient: string;
    newPrepStep: string;
    private _ingredients: string[];
    private _prepSteps: string[];
    
    constructor(private _authService: AuthService) {
        this._ingredients = [];
        this._prepSteps = [];
     }
     
     addIngredient(newIngredient: any) {
         this._ingredients.push(newIngredient);
         this.newIngredient = '';
     }
     
     deleteIngredient(index: any) {
         this._ingredients.splice(index, 1);
     }
     
     addPrepStep(newPrepStep: any) {
         this._prepSteps.push(newPrepStep);
         this.newPrepStep = '';
     }
     
     deletePrepStep(index: any) {
         this._prepSteps.splice(index, 1);
     }
     
    canActivate(next: any, prev: any) {
        return this._authService.authenticate(next);
    }
}
