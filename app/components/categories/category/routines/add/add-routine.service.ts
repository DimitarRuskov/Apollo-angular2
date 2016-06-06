import {Injectable} from '@angular/core';

import {HttpService} from 'shared/services/http.service';

@Injectable()
export class AddRoutineService {
    private serviceUrl: String = 'categories/';
    
    constructor(private _http: HttpService) { }
    
    public addRoutine(params: any) {
        return this._http.request('post', this.serviceUrl + params.category + '/routines', JSON.stringify(params), null);
    }
}
