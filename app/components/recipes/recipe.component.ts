import {Component, Input} from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
    moduleId: module.id,
    selector: 'apollo-recipe',
    templateUrl: 'recipe.component.html',
    styleUrls: ['recipe.component.css']
})

export class RecipeComponent {
    @Input() recipe: RecipeModel;
}
