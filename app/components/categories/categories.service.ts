import {Injectable} from '@angular/core';

import {CategoryModel} from './category/category.model';
import {HttpService} from 'shared/services/http.service';

@Injectable()
export class CategoriesService {
    public categories: Array<CategoryModel>;
    
    constructor(private _http: HttpService) {}
    
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
}
