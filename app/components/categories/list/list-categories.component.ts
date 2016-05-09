import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {CategoryComponent} from './../category.component';
import {CategoryModel} from '..//category.model';
import {CategoryService} from '../category.service';
import {UserService} from 'shared/services/user.service';

@Component({
    templateUrl:        'app/components/categories/list/list-categories.component.html',
    styleUrls:          ['app/components/categories/list/list-categories.component.css'],
    directives: [CategoryComponent],
    providers: [CategoryService]
})

export class ListCategoriesComponent {
    public categories:Array<CategoryModel> = [];
    constructor(private _categoryService: CategoryService, private _router:Router, private _routeParams:RouteParams, private user:UserService) {
        this._categoryService.listCategories({})
        .subscribe(
            data => this.categories = data.categories,
            err => console.log(err),
            () => console.log(this.categories)
        );
    }
    
    addCategory() {
        this._router.navigate(['AddCategory']);
    }
}