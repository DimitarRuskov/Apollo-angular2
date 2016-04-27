import {Injectable} from 'angular2/core';
import {UserModel} from '../models/user.model';

import {HttpService} from './http.service';
import {UtilsService} from './utils.service';

@Injectable()
export class UserService {
    private _user:UserModel
    isAuth:boolean;
    
    constructor(private _http: HttpService, private _utils: UtilsService) {
        this._user = new UserModel();
        this._user.sessionKey = localStorage.getItem('sessionKey');
        this._user.username = localStorage.getItem('username');
        this._user.imageUrl = localStorage.getItem('imageUrl');
        this.isAuth = this._checkIfAuth();
    }
    
    public storeUserDetails(data) {
        this._setSessionKey(data.token);
        this._setUserDetails(data.userDetails);
        this._user.username = data.userDetails.username;
        this._user.id = data.userDetails.id;
        this._user.sessionKey = localStorage.getItem('sessionKey');
        this.isAuth = this._checkIfAuth();
    }
    
    private _setSessionKey(sessionKey) {
        localStorage.setItem('sessionKey', sessionKey);
    }
    
    private _setUserDetails(userDetails) {
        localStorage.setItem('username', userDetails.username);
        localStorage.setItem('imageUrl', userDetails.imageUrl);
    }
    
    public getSessionKey() {
        return  this._user.sessionKey;
    }
    
    public closeSession() {
        localStorage.removeItem('sessionKey');
        this._user = new UserModel();
        this.isAuth = this._checkIfAuth();
    }
    
    private _checkIfAuth():boolean {
        return this._user.sessionKey ? true : false;
    }
    
    public getProfile(params) {
        var url = 'http://localhost:8003/user/' + params.userId; 
        return this._http.request('get', url, null, this.getSessionKey(), null);
    }
    
    public updateProfile(params) {
        var url = 'http://localhost:8003/user/' + params.userId; 
        return this._http.request('put', url, JSON.stringify(params), null, this.getSessionKey())
        .subscribe(
            data => (data) => console.log(data), 
            error => this._utils.defaultErrorHandler(error),
            () => window.alert('Successfully updated profile!')
        );
    }
    
    public getUserDetails() {
        return this._user;
    }
}