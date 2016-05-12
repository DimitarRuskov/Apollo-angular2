import {Router} from '@angular/router-deprecated';
import {Injectable} from '@angular/core';

import {CategoryModel} from './category.model';
import {UserService} from 'shared/services/user.service';
import {HttpService} from 'shared/services/http.service';
import {UtilsService} from 'shared/services/utils.service';

@Injectable()
export class CategoryService {
    public categories: Array<CategoryModel>;
    constructor(private _http: HttpService, private _user: UserService, private _router: Router) {
    }
    
    public listCategories(params: any) {
        var options:any = {
            search : {
                orderBy: {
                    updatedAt: -1
                }
            }
        }
        return this._http.request('get', 'http://localhost:8003/category/list', null, options, null);
    }
    
    public addCategory(params: any) {
        return this._http.request('post', 'http://localhost:8003/category/add', JSON.stringify(params), null, this._user.getSessionKey());
    }
    
    onSuccess(data: any) {
        this._router.navigate(['Categories']);
    }
}
