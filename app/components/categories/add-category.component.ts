import {Component, ElementRef} from 'angular2/core';
import {RecipeModel} from '../../models/recipe.model';

@Component({
    templateUrl:        'app/components/categories/add-category.component.html',
    styleUrls:          ['app/components/categories/add-category.component.css']
})

export class AddCategoryComponent {
    constructor(private element: ElementRef) { }
     
     changeListner(event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e) {
            var src = e.target.result;
            image.src = src;
        };

        reader.readAsDataURL(event.target.files[0]);
    }
}