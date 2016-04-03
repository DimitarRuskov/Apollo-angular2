import {Injectable} from 'angular2/core';
import {UserModel} from '../models/user.model';

@Injectable()
export class UserService {
    constructor() { }
    
    private _isAuth:boolean = false;
    private _isAdmin:boolean = false;
    private _user:UserModel;
    
    public storeUserDetails(userData) {
        this._user = new UserModel();
        this._user.username = userData.username;
        this._user.email = userData.email;
        this._user.role = userData.role;
        this._setSessionKey(userData.sessionKey);
    }
    
    private _setSessionKey(sessionKey) {
        localStorage.setItem('sessionKey', sessionKey);
        this._isAuth = true;
    }
    
    public getSessionKey() {
        return localStorage.getItem('sessionKey');
    }
    
    public closeSession() {
        this._isAuth = false;
    }
    
    private isAuth() {
        return this._isAuth;
    }
    
    public isAdmin() {
        return this.isAdmin;
    }
    
    public getUserDetails() {
        return this._user;
    }
}