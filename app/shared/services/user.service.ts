import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {Subject} from 'rxjs/Subject';

import {HttpService} from './http.service';
import {AuthService} from './auth.service';
import {StorageService} from './storage.service';

@Injectable()
export class UserService {
    userDetails: UserModel;
    private _userDetailsObserver = new Subject<boolean>();
    public _userDetails: UserModel;
    public userDetails$ = this._userDetailsObserver.asObservable();
    
    constructor(private _http: HttpService, private _authService: AuthService, private _storageService: StorageService) {       
        this.userDetails = new UserModel();
        this.userDetails$.subscribe(
            (data: any) => {
                this._userDetails = data;
            }
        );
        this._userDetailsObserver.next(this._storageService.get('user', true));
    }
    
    public updateUserDetails(data: any) {
        this._userDetailsObserver.next(data);
    }
    
    public reloadUserDetails() {
        this._userDetailsObserver.next(this._storageService.get('user', true));
    }
    
    public getSessionKey() {
        return this.userDetails.sessionKey;
    }
    
    public getUserDetails() {
        return this.userDetails;
    }
}