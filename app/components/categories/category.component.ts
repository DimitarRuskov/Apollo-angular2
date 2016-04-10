 import {Component, Input}  from 'angular2/core';
 import {CategoryModel}     from '../../models/category.model';
 import {}

@Component({
    selector:           'apollo-category',
    templateUrl:        'app/components/categories/category.component.html',
    styleUrls:          ['app/components/categories/category.component.css']
})

export class CategoryComponent {
    @Input () category:CategoryModel;
    
    
}