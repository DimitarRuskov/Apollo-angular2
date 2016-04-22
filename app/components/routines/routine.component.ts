 import {Component, Input}  from 'angular2/core';
 import {CategoryModel}     from '../../models/category.model';
 import {Router} from "angular2/router";

@Component({
    selector:           'apollo-routine',
    templateUrl:        'app/components/categories/category.component.html',
    styleUrls:          ['app/components/categories/category.component.css']
})

export class CategoryComponent {
    @Input () category:CategoryModel;
    
    constructor(private _router:Router) { }
    
    listRoutines(categoryId) {
        this._router.navigate(['Routines', {categoryId: categoryId}])
    }
}