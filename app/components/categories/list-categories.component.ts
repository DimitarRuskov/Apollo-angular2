import {Component} from 'angular2/core';
import {CategoryComponent} from './category.component';
import {CategoryModel} from '../../models/category.model';
import {CategoryService} from '../../services/category.service'

@Component({
    templateUrl:        'app/components/categories/list-categories.component.html',
    styleUrls:          ['app/components/categories/list-categories.component.css'],
    directives: [CategoryComponent],
    providers: [CategoryService]
})

export class ListCategoriesComponent {
    public categories:Array<any>;
    constructor(private _category: CategoryService) {
        this.categories = this._category.categories;
    }
}