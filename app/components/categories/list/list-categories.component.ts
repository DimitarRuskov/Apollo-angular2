import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {CategoryComponent} from './../category.component';
import {CategoryModel} from '..//category.model';
import {CategoryService} from '../category.service';
import {UserService} from 'shared/services/user.service';
import {AuthService} from 'shared/services/auth.service';
import {UtilsService} from 'shared/services/utils.service';

@Component({
    templateUrl:        'app/components/categories/list/list-categories.component.html',
    styleUrls:          ['app/components/categories/list/list-categories.component.css'],
    directives: [CategoryComponent],
    providers: [CategoryService, UtilsService]
})

export class ListCategoriesComponent implements OnInit {
    public columns: number = 2;
    public categories: any = [];
    private _isAuth: boolean;
    
    constructor(private _categoryService: CategoryService, private _router: Router, private _routeParams: RouteParams,
    private user: UserService, private _authService: AuthService, private _utilsService: UtilsService) {
        this._isAuth = this._authService.isAuthenticated();
        
        this._categoryService.listCategories({})
        .subscribe(
            (data: any) => this.buildDataList(data),
            (err: any) => UtilsService.error(err)
        );
    }
    
    ngOnInit() {
        
    }
    
    buildDataList(data: any) {
        data = data.categories;
        for (let i = 0; i < this.columns; i++) {
            this.categories[i] = new Array<CategoryModel>();
        }
        for (let i = 0; i < data.length; i++) {
            if ((i + 2) % 2 === 0) {
                this.categories[0].push(data[i]);
            } else {
                this.categories[1].push(data[i]);
            }
        }
    }
    
    addCategory() {
        this._router.navigate(['AddCategory']);
    }
    
    onMouseEnter(event: any) {
        let container = event.target.querySelector('.card-container');
    }
}
