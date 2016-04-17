import {Http, Response, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

import {UserService} from './user.service';

@Injectable()
export class AuthService {
    private _headers:Headers
    constructor(private _http:Http, private _userService: UserService) {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }
    
    public register(params) {
        delete params.passwordConfirm;
        var prms:any = {
            params: params
        }
        this._http.post('http://localhost:8003/user/register', JSON.stringify(prms), {headers: this._headers})
        .map((res: Response) => res.json())
        .subscribe(
            data => this._userService.storeUserDetails(data),
            err => this.logError(err),
            () => window.alert('Registration Complete')
        )
    }
    
    public login(params) {
        return this._http.post('http://localhost:8003/user/login', JSON.stringify(params), {headers: this._headers})
        .map((res: Response) => res.json())
    }
    
    logError(err) {
        window.alert('Failed: ' + JSON.parse(err._body).message + ' ' + JSON.parse(err._body).description);
        console.error('There was an error: ' + JSON.parse(err._body).message);
    }
}