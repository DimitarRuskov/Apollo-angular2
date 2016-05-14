import {ComponentInstruction} from '@angular/router-deprecated';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {HttpService} from './http.service';
import {StorageService} from './storage.service';

@Injectable()
export class AuthService {
    public isAuthenticated: boolean;
    
    constructor(private _http: HttpService, private _storageService: StorageService) {
        this.isAuthenticated = false;
    }
    
    public register(params: any) {
        delete params.passwordConfirm;
        let prms: any = {
            params: params
        };
        return this._http.request('post', 'http://localhost:8003/user/register', JSON.stringify(prms), null, null);
    }
    
    public login(params: any) {
        return Observable.create((observer: any) => {
            this._http.request('post', 'http://localhost:8003/user/login', JSON.stringify(params), null, null)
            .subscribe(
                (data: any) => {
                    this.isAuthenticated = true;
                    observer.next(data);
                    observer.complete();
                },
                (error: any) => {
                    observer.error(error);
                }
            );
        });
    }
    
    public logout(params: any) {
        this._storageService.remove('user', true);
        this.isAuthenticated = false;
    }
    
    public authenticated(next: ComponentInstruction) {
        if (!this.isAuthenticated) {
            return false;
        }
        
        if (next.routeData.data['roles']) {
            let userRoles = this._storageService.get('user').roles;
            let canAccess = false;
                    
            for (let i = 0; i < userRoles.length; i++) {
                if (next.routeData.data['roles'].indexOf(userRoles) >= 0) {
                    canAccess = true;
                    break;
                }
            }
            
            return canAccess;
        }
        
        return true;
    }
}
