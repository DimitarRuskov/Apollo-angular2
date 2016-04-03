import {Http, Headers, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
    _headers: any
    constructor(private _http:Http) { }
    
    public fetchRecipes(params) {
        return this._http.post('http://localhost:8003/recipes', JSON.stringify(params))
        .map((res: Response) => res.json())
    }
}