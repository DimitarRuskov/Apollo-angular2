import {Injectable} from '@angular/core';

import {RoutineModel} from './routine.model';
import {UserService} from 'shared/services/user.service';
import {HttpService} from 'shared/services/http.service';

@Injectable()
export class RoutineService {
    public routines: Array<RoutineModel>;
    
    constructor(private _http: HttpService, private _user: UserService) { }
     
    public listRoutines(params: any) {
        let options = {
            search: {
                categoryId: params.categoryId,
                name: params.name
            }
        };
        return this._http.request('get', 'http://localhost:8003/routine/list', null, options, null);
    }
    
    public addRoutine(params: any) {
        return this._http.request('post', 'http://localhost:8003/routine/add', JSON.stringify(params), null, this._user.getAccessToken());
    }
    
    public addComment(params: any) {
        return this._http.request('post', 'http://localhost:8003/routine/comment', JSON.stringify(params), null, this._user.getAccessToken());
    }
    
    public listComments(params: any) {
        let options = {
            search: {
                routineId: params.routineId,
                page: params.page
            }
        };
        return this._http.request('get', 'http://localhost:8003/routine/listComments', null, options, null);
    }
    
    public getDetails(params: any) {
        let options = {
            search: {routineId: params.routineId}
        };
        return this._http.request('get', 'http://localhost:8003/routine/details', null, options, null);
    }
}
