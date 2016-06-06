import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {CategoryModel} from './category/category.model';
import {CategoriesService} from './categories.service';

import {UserService} from 'shared/services/user.service';
import {AuthService} from 'shared/services/auth.service';
import {UtilsService} from 'shared/services/utils.service';

@Component({
    moduleId: module.id,
    templateUrl: 'categories.component.html',
    styleUrls: ['categories.component.css'],
    providers: [CategoriesService, UtilsService]
})

export class CategoriesComponent implements OnInit {
    public columns: number = 2;
    public categories: any = [];
    private _isAuth: boolean;
    
    constructor(private _categoriesService: CategoriesService, private _router: Router, private _routeParams: RouteParams,
    private user: UserService, private _authService: AuthService, private _utilsService: UtilsService) {
        this._isAuth = this._authService.isAuthenticated();
        
        this._categoriesService.listCategories({})
        .subscribe(
            (data: any) => this.buildDataList(data),
            (err: any) => UtilsService.error(err)
        );
    }
    
    ngOnInit() { }
    
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
    
    viewCategory(category: any) {
        this._router.navigate(['Category', {
            category: category._id
        }]);
    }
    
    onMouseEnter(event: any) {
        let container = event.target.querySelector('.card-container');
    }
}
