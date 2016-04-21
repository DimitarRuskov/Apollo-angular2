import {Injectable} from 'angular2/core';
import {UserModel} from '../models/user.model';

@Injectable()
export class UserService {
    private _user:UserModel
    isAuth:boolean;
    
    constructor() {
        this._user = new UserModel();
        this._user.sessionKey = localStorage.getItem('sessionKey');
        this.isAuth = this._checkIfAuth();
    }
    
    public storeUserDetails(data) {
        this._setSessionKey(data.token);
        this._user.username = data.userDetails.username;
        this._user.id = data.userDetails.id;
        this._user.sessionKey = localStorage.getItem('sessionKey');
        this.isAuth = this._checkIfAuth();
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
        this.isAuth = this._checkIfAuth();
    }
    
    private _checkIfAuth():boolean {
        return this._user.sessionKey ? true : false;
    }
    
    public getUserDetails() {
        return this._user;
    }
}