 import {Component, Input}  from 'angular2/core';
 import {RecipeModel}       from '../../models/recipe.model';

@Component({
    selector:           'apollo-recipe',
    templateUrl:        'app/components/recipes/recipe.component.html',
    styleUrls:          ['app/components/recipes/recipe.component.css']
})

export class RecipeComponent {
    @Input () recipe:RecipeModel;
}