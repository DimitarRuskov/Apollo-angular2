import {Injectable} from '@angular/core';

import {RoutineModel} from './routine.model';
import {UserService} from 'shared/services/user.service';
import {HttpService} from 'shared/services/http.service';

@Injectable()
export class RoutineService {
    public routines: Array<RoutineModel>;
    private serviceUrl: String = 'categories/';
    
    constructor(private _http: HttpService, private _user: UserService) { }
     
    public listRoutines(params: any) {
        let options = {
            search: {
                page: params.page
            }
        };
        
        return this._http.request('get', this.serviceUrl + params.category + '/routines', null, options);
    }
    
    public addRoutine(params: any) {
        return this._http.request('post', this.serviceUrl + params.category + '/routines', JSON.stringify(params), null);
    }
    
    public addComment(params: any) {
        let data = {
            content: params.content
        };
        
        return this._http.request('post', this.serviceUrl + params.category + '/routines/' + params.routine + '/comments',
        JSON.stringify(data), null);
    }
    
    public listComments(params: any) {
        let options = {
            search: {
                page: params.page
            }
        };
        
        return this._http.request('get', this.serviceUrl + params.category + '/routines/' + params.routine + '/comments', null, options);
    }
    
    public getDetails(params: any) {
        return this._http.request('get', this.serviceUrl + params.category + '/routines/' + params.routine, null, null);
    }
}
