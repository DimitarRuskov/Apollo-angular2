import {Component} from 'angular2/core';

import {CategoryComponent} from './category.component';
import {CategoryModel} from '../../models/category.model';
import {CategoryService} from '../../services/category.service';
import {UserService} from '../../services/user.service';

@Component({
    templateUrl:        'app/components/categories/list-categories.component.html',
    styleUrls:          ['app/components/categories/list-categories.component.css'],
    directives: [CategoryComponent],
    providers: [CategoryService]
})

export class ListCategoriesComponent {
    public categories:Array<CategoryModel> = [];
    constructor(private _categoryService: CategoryService, private user:UserService) {
        this._categoryService.listCategories({})
        .subscribe(
            data => this.categories = data.categories,
            err => console.log(err),
            () => console.log(this.categories)
        );
    }
}