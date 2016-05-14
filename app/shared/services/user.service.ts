import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';

import {HttpService} from './http.service';
import {AuthService} from './auth.service';
import {StorageService} from './storage.service';

@Injectable()
export class UserService {
    userDetails: UserModel;
    
    constructor(private _http: HttpService, private _authService: AuthService, private _storageService: StorageService) {
        this.userDetails = new UserModel();
        this.userDetails = this._storageService.get('user', true);
    }
    
    public reloadUserDetails(data: any) {
        this.userDetails = this._storageService.get('user', true);
    }
    
    public getSessionKey() {
        return  this.userDetails.sessionKey;
    }
    
    public getUserDetails() {
        return this.userDetails;
    }
}