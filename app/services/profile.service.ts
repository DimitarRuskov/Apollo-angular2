import {Http, Response, Headers} from 'angular2/http';
import {Router} from "angular2/router";
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

import {UserService} from './user.service';

@Injectable()
export class ProfileService {
    private _headers:Headers;
    
    constructor(private _http:Http, private _userService: UserService, private _router:Router) {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }
    
    public updateProfile(params) {
        return this._http.post('http://localhost:8003/user/update ', JSON.stringify(params), {headers: this._headers})
        .map((res: Response) => res.json())
        .subscribe(
            data => this.onSuccess(data),
            err => this.onError(err),
            () => window.alert('Successfully Edited Profile!')
        )
    }
    
    onError(err) {
        window.alert('Failed: ' + JSON.parse(err._body).message + ' ' + JSON.parse(err._body).description);
        console.error('There was an error: ' + JSON.parse(err._body).message);
    }
    
    onSuccess(data) {
        alert('Success: ' + JSON.parse(data));
    }
}
