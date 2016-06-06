import {Injectable} from '@angular/core';

import {CategoryModel} from './category.model';
import {UserService} from 'shared/services/user.service';
import {HttpService} from 'shared/services/http.service';

@Injectable()
export class CategoryService {
    public categories: Array<CategoryModel>;
    private serviceUrl: String = 'categories/';

    constructor(private _http: HttpService, private _user: UserService) {}
    
     public listRoutines(params: any) {
        let options = {
            search: {
                page: params.page,
                name: params.name
            }
        };
        
        return this._http.request('get', this.serviceUrl + params.category + '/routines', null, options);
    }
}
