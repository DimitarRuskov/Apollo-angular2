import {Component} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {CategoryComponent} from './../category.component';
import {CategoryModel} from '..//category.model';
import {CategoryService} from '../category.service';
import {UserService} from 'shared/services/user.service';
import {AuthService} from 'shared/services/auth.service';

@Component({
    templateUrl:        'app/components/categories/list/list-categories.component.html',
    styleUrls:          ['app/components/categories/list/list-categories.component.css'],
    directives: [CategoryComponent],
    providers: [CategoryService]
})

export class ListCategoriesComponent {
    public categories: Array<CategoryModel> = [];
    private _isAuth: boolean;
    constructor(private _categoryService: CategoryService, private _router: Router, private _routeParams: RouteParams,
     private user: UserService, private _authService: AuthService) {
        this._isAuth = this._authService.isAuthenticated();
        
        this._categoryService.listCategories({})
        .subscribe(
            (data: any) => this.categories = data.categories,
            (err: any) => console.log(err),
            () => console.log(this.categories)
        );
    }
    
    addCategory() {
        this._router.navigate(['AddCategory']);
    }
}
