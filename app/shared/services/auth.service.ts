import {Router, Redirect, ComponentInstruction} from '@angular/router-deprecated';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {UserService} from './user.service';
import {HttpService} from './http.service';
import {UtilsService} from './utils.service';

import {NotificationsService} from 'angular2-notifications/components';

@Injectable()
export class AuthService {
    constructor(private _http: HttpService, private _utils: UtilsService, private _user: UserService, private _router: Router) { }
    
    public register(params: any) {
        delete params.passwordConfirm;
        let prms: any = {
            params: params
        };
        return this._http.request('post', 'http://localhost:8003/user/register', JSON.stringify(prms), null, null)
        .subscribe(
            data => this.onSuccess(data),
            error => this._utils.defaultErrorHandler(error),
            () => this._utils.success('Registered')
        );
    }
    
    public login(params: any) {
        return this._http.request('post', 'http://localhost:8003/user/login', JSON.stringify(params), null, null)
        .subscribe(
            data => this.onSuccess(data),
            error => this._utils.defaultErrorHandler(error),
            () => this._utils.success('Logged in')
        );
    }
    
    public doAuth(next: ComponentInstruction) {
        if (!this._user.isAuth) {
            this._router.navigate(['Home']);
        }
        
        if (next.routeData.data['roles']) {
            let userRoles = this._user.getUserDetails().roles;
            let canAccess = false;
                    
            for (let i = 0; i < userRoles.length; i++) {
                if (next.routeData.data['roles'].indexOf(userRoles) >= 0) {
                    canAccess = true;
                    break;
                }
            }
            
            if (!canAccess) {
                this._router.navigate(['Home']);
            }
        }
    }
    
    onSuccess(data: any) {
        this._user.storeUserDetails(data);
        this._router.navigate(['Home']);
    }
}