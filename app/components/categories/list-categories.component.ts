import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

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