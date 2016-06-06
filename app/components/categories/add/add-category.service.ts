import {Injectable} from '@angular/core';

import {HttpService} from 'shared/services/http.service';

@Injectable()
export class AddCategoryService {
    constructor(private _http: HttpService) {}
    
    public addCategory(params: any) {
        return this._http.request('post', 'categories', JSON.stringify(params), null);
    }
}
