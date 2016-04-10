import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {CategoryModel} from '../models/category.model';

@Injectable()
export class CategoryService {
    public categories:any;
    constructor(private _http:Http) {
        this.categories = this._http.post('http://localhost:4000/category/list', JSON.stringify({}))
        .map(res => res.json())
        .subscribe(categories => this.categories = categories)
    }
}