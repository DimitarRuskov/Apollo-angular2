import {Router} from "angular2/router";
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

import {UserService} from './user.service';
import {HttpService} from './http.service';
import {UtilsService} from './utils.service';

@Injectable()
export class AuthService {
    
    constructor(private _http:HttpService, private _utils: UtilsService, private _user: UserService, private _router:Router) { }
    
    public register(params) {
        delete params.passwordConfirm;
        var prms:any = {
            params: params
        }
        return this._http.request('post', 'http://localhost:8003/user/register', JSON.stringify(prms), null, null)
        .subscribe(
            data => this.onSuccess(data),
            error => this._utils.defaultErrorHandler(error),
            () => window.alert('Successfully Registered!')
        );
    }
    
    public login(params) {
        return this._http.request('post', 'http://localhost:8003/user/login', JSON.stringify(params), null, null)
        .subscribe(
            data => this.onSuccess(data),
            error => this._utils.defaultErrorHandler(error),
            () => window.alert('Successfully Logged in!')
        );
    }
    
    onSuccess(data) {
        this._user.storeUserDetails(data);
        this._router.navigate(['Home']);
    }
}