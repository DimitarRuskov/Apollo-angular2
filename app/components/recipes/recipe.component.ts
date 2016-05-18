import {Component, Input}  from '@angular/core';
import {RecipeModel}       from './recipe.model';

@Component({
    selector:           'apollo-recipe',
    templateUrl:        'app/components/recipes/recipe.component.html',
    styleUrls:          ['app/components/recipes/recipe.component.css']
})

export class RecipeComponent {
    @Input() recipe: RecipeModel;
}
