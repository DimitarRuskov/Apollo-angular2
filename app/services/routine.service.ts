import {Router} from "angular2/router";
import {Injectable} from 'angular2/core';

import {RoutineModel} from '../models/routine.model';
import {UserService} from './user.service';
import {HttpService} from './http.service';
import {UtilsService} from './utils.service';

@Injectable()
export class RoutineService {
    public routines:Array<RoutineModel>;
    constructor(private _http:HttpService, private _utils:UtilsService, private _user:UserService, private _router:Router) { }
    
    public listRoutines(params) {
        var options = {
            search: {categoryId: params.categoryId}
        };
        return this._http.request('get', 'http://localhost:8003/routine/list', null, options, null);
    }
    
    public addRoutine(params) {
        return this._http.request('post', 'http://localhost:8003/routine/add', JSON.stringify(params), null, this._user.getSessionKey())
        .subscribe(
            data => this.onSuccess(data),
            err => this._utils.defaultErrorHandler(err),
            () => window.alert('Successfully created Routine!')
        )
    }
    
    onSuccess(data) {
        this._router.navigate(['Categories']);
    }
}