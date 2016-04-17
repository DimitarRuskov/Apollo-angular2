import {Injectable} from 'angular2/core';
import {UserModel} from '../models/user.model';

@Injectable()
export class UserService {
    private _user:UserModel
    
    constructor() {
        this._user = new UserModel();
        this._user.sessionKey = localStorage.getItem('sessionKey');
    }
    
    public storeUserDetails(userDetails) {
        this._setSessionKey(userDetails.token);
        this._user.sessionKey = localStorage.getItem('sessionKey');
    }
    
    private _setSessionKey(sessionKey) {
        localStorage.setItem('sessionKey', sessionKey);
    }
    
    public getSessionKey() {
        return  this._user.sessionKey;
    }
    
    public closeSession() {
        localStorage.removeItem('sessionKey');
        this._user = new UserModel();
    }
    
    private isAuth() {
        return this._user.sessionKey ? true : false;
    }
    
    public isAdmin() {
        return this.isAdmin;
    }
    
    public getUserDetails() {
        return this._user;
    }
}