import {ComponentInstruction} from '@angular/router-deprecated';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {HttpService} from './http.service';
import {StorageService} from './storage.service';

@Injectable()
export class AuthService {
    private _isAuthenticatedObserver = new Subject<boolean>();
    public _isAuthenticated: boolean;
    public isAuthenticated$ = this._isAuthenticatedObserver.asObservable();
    
    constructor(private _http: HttpService, private _storageService: StorageService) {
        this._isAuthenticated = this._storageService.get('user', true) || false;
        this.isAuthenticated$.subscribe(
            (data: any) => {
                this._isAuthenticated = data;
            }
        );
    }
    
    public register(params: any) {
        delete params.passwordConfirm;
        let prms: any = {
            params: params
        };
        return this._http.request('post', 'http://localhost:8003/user/register', JSON.stringify(prms), null, null);
    }
    
    public login(params: any) {
        let __this = this;
        return Observable.create((observer: any) => {
            this._http.request('post', 'http://localhost:8003/user/login', JSON.stringify(params), null, null)
            .subscribe(
                (data: any) => {
                    __this._isAuthenticatedObserver.next(true);
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
        return Observable.create((observer: any) => {
            this._storageService.remove('user', true);
            this._isAuthenticatedObserver.next(false);
            observer.next(true);
            observer.complete();
        });
    }
    
    public isAuthenticated() {
        return this._isAuthenticated;
    }
    
    public authenticated(next: ComponentInstruction) {
        if (!this._isAuthenticated) {
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
