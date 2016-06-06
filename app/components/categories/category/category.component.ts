import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {CategoryService} from './category.service';
import {AuthService} from 'shared/services/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.css'],
    providers: [CategoryService]
})

export class CategoryComponent implements OnInit {
    public columns: number = 2;
    public routines: any = [];
    private _categoryId: String;
    private _isAuth: boolean;
    private searchTimeout: any;
    private searchKey: any = '';
    
    constructor(private _categoryService: CategoryService, private _router: Router,
    private _routeParams: RouteParams, private _authService: AuthService) {
        this._isAuth = this._authService.isAuthenticated();
    }
    
    ngOnInit() {
        this._categoryId = this._routeParams.get('category');
        this.fetchRoutines();
    }
    
    fetchRoutines() {
        let options = {
            category: this._categoryId,
            name: this.searchKey
        };
        
        this._categoryService.listRoutines(options)
        .subscribe(
            (data: any) => this.buildDataList(data),
            (err: any) => console.log(err),
            () => console.log(this.routines)
        );
    }
    
    buildDataList(data: any) {
        data = data.routines;
        
        for (let i = 0; i < this.columns; i++) {
            this.routines[i] = new Array<Object>();
        }
        
        for (let i = 0; i < data.length; i++) {
            if ((i + 2) % 2 === 0) {
                this.routines[0].push(data[i]);
            } else {
                this.routines[1].push(data[i]);
            }
        }
    }
    
    addRoutine() {
        this._router.navigate(['AddRoutine', {category: this._categoryId}]);
    }
    
    viewRoutine(routine: any) {
        this._router.navigate(['Routine', {
            category: routine.categoryId,
            routine: routine._id
        }]);
    }
    
    keyUpListener(event: any) {
        this.searchKey = event.target.value;
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.fetchRoutines();
        }, 1000);
    }
}
