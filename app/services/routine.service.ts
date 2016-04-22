import {Http, Response, Headers} from 'angular2/http';
import {Router} from "angular2/router";
import {Injectable} from 'angular2/core';

import {RoutineModel} from '../models/routine.model';
import {UserService} from './user.service';

@Injectable()
export class RoutineService {
    public routines:Array<RoutineModel>;
    private _headers:Headers;
    constructor(private _http:Http, private _user:UserService, private _router:Router) {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }
    
    public listRoutines(params) {
        var prms:any = {
            orderBy: {
                updatedAt: -1
            }
        }
        return this._http.post('http://localhost:8003/routine/list', JSON.stringify(prms), {headers: this._headers})
        .map((res:Response) => res.json())
    }
    
    public addRoutine(params) {
        this._headers.set('Authorization', 'Bearer ' + this._user.getSessionKey());
        return this._http.post('http://localhost:8003/routine/add', JSON.stringify(params), {headers: this._headers})
        .map((res: Response) => res.json())
        .subscribe(
            data => this.onSuccess(data),
            err => this.onError(err),
            () => window.alert('Successfully created Routine!')
        )
    }
    
    onSuccess(data) {
        this._router.navigate(['Routines']);
    }
    
    onError(err) {
        window.alert('Failed: ' + JSON.parse(err._body).message + ' ' + JSON.parse(err._body).description);
        console.error(err);
    }
}