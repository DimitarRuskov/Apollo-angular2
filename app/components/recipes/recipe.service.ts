import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {HttpService} from 'shared/services/http.service';

@Injectable()
export class RecipeService {
    constructor(private _http:HttpService) { }
    
    public fetchRecipes(params) {
        var options = {
            search: params
        };
        return this._http.request('get', 'http://localhost:8003/recipes', null, options, null);
    }
}