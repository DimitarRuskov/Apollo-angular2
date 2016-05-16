import {Router} from '@angular/router-deprecated';
import {Injectable} from '@angular/core';

import {RoutineModel} from './routine.model';
import {UserService} from 'shared/services/user.service';
import {HttpService} from 'shared/services/http.service';
import {UtilsService} from 'shared/services/utils.service';

@Injectable()
export class RoutineService {
    public routines: Array<RoutineModel>;
    constructor(private _http: HttpService, private _utils: UtilsService, private _user: UserService, private _router: Router) { }
    
    public listRoutines(params: any) {
        let options = {
            search: {categoryId: params.categoryId}
        };
        return this._http.request('get', 'http://localhost:8003/routine/list', null, options, null);
    }
    
    public addRoutine(params: any) {
        return this._http.request('post', 'http://localhost:8003/routine/add', JSON.stringify(params), null, this._user.getAccessToken())
        .subscribe(
            (data: any) => this.onSuccess(data),
            (err: any) => this._utils.defaultErrorHandler(err),
            () => window.alert('Successfully created Routine!')
        )
    }
    
    onSuccess(data: any) {
        this._router.navigate(['Categories']);
    }
}
