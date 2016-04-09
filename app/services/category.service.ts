import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class RecipeService {
    _headers: any
    constructor(private _http:Http) { }
    
    public fetchRecipes(params) {
        return this._http.post('http://localhost:4000/category/list', JSON.stringify(params))
    }
}