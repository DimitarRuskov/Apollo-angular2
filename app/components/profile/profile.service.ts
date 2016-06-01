import {Injectable} from '@angular/core';
import {UserService} from 'shared/services/user.service';
import {HttpService} from 'shared/services/http.service';

@Injectable()
export class ProfileService {
    constructor(private _http: HttpService, private _user: UserService) {}
    
    public getProfile(user: any) {
        return this._http.request('get', 'users/profile/' + user, null, null);
    }
    
    public editProfile(data: any) {
        return this._http.request('put', 'users/profile',
        JSON.stringify(data), null);
    }
}
