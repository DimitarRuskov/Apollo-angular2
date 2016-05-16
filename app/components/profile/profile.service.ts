import {Injectable} from '@angular/core';
import {UserService} from 'shared/services/user.service';
import {HttpService} from 'shared/services/http.service';

@Injectable()
export class ProfileService {
    constructor(private _http: HttpService, private _user: UserService) {}
    
    public getProfile(user: any) {
        return this._http.request('get', 'http://localhost:8003/user/' + user, null, null, null);
    }
    
    public editProfile(data: any) {
        return this._http.request('put', 'http://localhost:8003/profile/edit', JSON.stringify(data), null, this._user.getAccessToken());
    }
}
