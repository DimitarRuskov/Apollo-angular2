import {Component} from 'angular2/core';
import {CategoryComponent} from './category.component';
import {CategoryModel} from '../../models/category.model';

@Component({
    templateUrl:        'app/components/categories/list-categories.component.html',
    styleUrls:          ['app/components/categories/list-categories.component.css'],
    directives: [CategoryComponent]
})

export class ListCategoriesComponent {
    
    public categories:CategoryModel[] = [];
    constructor() {

    }
}