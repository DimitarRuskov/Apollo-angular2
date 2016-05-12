import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';

import {HttpService} from './http.service';
import {UtilsService} from './utils.service';
import {StorageService} from './storage.service';

@Injectable()
export class UserService {
    userDetails: UserModel;
    isAuth: boolean;
    
    constructor(private _http: HttpService, private _utils: UtilsService, private _storage: StorageService) {
        this.userDetails = new UserModel();
        this.userDetails.sessionKey = localStorage.getItem('sessionKey');
        this.userDetails.username = localStorage.getItem('username');
        this.userDetails.imageUrl = localStorage.getItem('imageUrl');
        this.isAuth = this._checkIfAuth();
    }
    
    public storeUserDetails(data: any) {
        this._setSessionKey(data.token);
        this._setUserDetails(data.userDetails);
        this.userDetails.username = data.userDetails.username;
        this.userDetails.id = data.userDetails.id;
        this.userDetails.sessionKey = localStorage.getItem('sessionKey');
        this.isAuth = this._checkIfAuth();
    }
    
    private _setSessionKey(sessionKey: any) {
        localStorage.setItem('sessionKey', sessionKey);
    }
    
    private _setUserDetails(userDetails: any) {
        localStorage.setItem('username', userDetails.username);
        localStorage.setItem('imageUrl', userDetails.imageUrl);
    }
    
    public getSessionKey() {
        return  this.userDetails.sessionKey;
    }
    
    public closeSession() {
        localStorage.removeItem('sessionKey');
        this.userDetails = new UserModel();
        this.isAuth = this._checkIfAuth();
    }
    
    private _checkIfAuth(): boolean {
        return this.userDetails.sessionKey ? true : false;
    }
    
    public getProfile(params: any) {
        params = params || {};
        params.username = params.username || this.userDetails.username;
        var url = 'http://localhost:8003/user/' + params.username; 
        return this._http.request('get', url, null, null, this.getSessionKey());
    }
    
    public updateProfile(params: any) {
        var url = 'http://localhost:8003/user/' + params.userId; 
        return this._http.request('put', url, JSON.stringify(params), null, this.getSessionKey())
        .subscribe(
            data => (data) => console.log(data), 
            error => this._utils.defaultErrorHandler(error),
            () => window.alert('Successfully updated profile!')
        );
    }
    
    public getUserDetails() {
        return this.userDetails;
    }
}