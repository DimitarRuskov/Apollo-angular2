import {Component} from 'angular2/core';
import {RecipeComponent} from './../recipe.component';
import {RecipeModel} from './../recipe.model';

@Component({
    templateUrl:        'app/components/recipes/list/list-recipes.component.html',
    styleUrls:          ['app/components/recipes/list/list-recipes.component.css'],
    directives: [RecipeComponent]
})

export class ListRecipesComponent {
    
    public recipes:RecipeModel[] = [];
    constructor() {
        let model1:RecipeModel = new RecipeModel();
        model1.id = 1;
        model1.author = 'Dimitar Ruskov';
        model1.comments = 4;
        model1.createdAt = new Date().toISOString();
        model1.content = 'Preheat oven to 375 degrees F. Lightly coat an 8-inch-square nonstick baking pan with cooking spray. In a small bowl, whisk together egg, egg white, yogurt, and vanilla extract; set aside.'
        model1.title = 'Big Fudgy Bittersweet Brownies';
        model1.thumbsUp = 4;
        model1.thumbsDown = 0;
        this.recipes.push(model1);
        
        let model2:RecipeModel = new RecipeModel();
        model2.id = 1;
        model2.author = 'Martin Ruskov';
        model2.comments = 24;
        model2.createdAt = new Date().toISOString();
        model2.content = 'For longer lasting balls I suggest storing them in the freezer! What I do is place a piece of parchment paper on a baking sheet and spread the balls out on the sheet. I pop them in the freezer for about an hour or two before transferring into a gallon-size bag. They should stay good for a few months!';
        model2.title = 'APPLE CHAI ENERGY BALLS';
        model2.thumbsUp = 18;
        model2.thumbsDown = 2;
        this.recipes.push(model2);
        this.recipes.push(model2);
        this.recipes.push(model2);
    }
}