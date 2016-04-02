import {Injectable} from 'angular2/core';

@Injectable()
export class UserService {
    constructor() { }
    
    private _isAuth: boolean = false;
    private _isAdmin: boolean = false;
    
    public storeUserDetails(userData) {
        this._setSessionKey(userData.sessionKey);
    }
    
    private _setSessionKey(sessionKey) {
        // localStorage.setItem('sessionKey', sessionKey);
        this._isAuth = true;
    }
    
    public getSessionKey() {
        // localStorage.getItem('sessionKey');
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
        return {name: 'edi koi si', email: 'someone@abv.bg'};
    }
}