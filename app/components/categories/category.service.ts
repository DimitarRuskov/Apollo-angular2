import {Injectable} from '@angular/core';

import {CategoryModel} from './category.model';
import {UserService} from 'shared/services/user.service';
import {HttpService} from 'shared/services/http.service';

@Injectable()
export class CategoryService {
    public categories: Array<CategoryModel>;
    
    constructor(private _http: HttpService, private _user: UserService) {}
    
    public listCategories(params: any) {
        let options: any = {
            search : {
                orderBy: {
                    updatedAt: -1
                }
            }
        };
        
        return this._http.request('get', 'categories', null, options);
    }
    
    public addCategory(params: any) {
        return this._http.request('post', 'categories', JSON.stringify(params), null);
    }
}
