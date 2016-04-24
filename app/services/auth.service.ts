import {Http, Response, Headers} from 'angular2/http';
import {Router} from "angular2/router";
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

import {UserService} from './user.service';

@Injectable()
export class AuthService {
    private _headers:Headers;
    
    constructor(private _http:Http, private user: UserService, private _router:Router) {
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
            data => this.onSuccess(data),
            err => this.onError(err),
            () => window.alert('Registration Complete')
        )
    }
    
    public login(params) {
        return this._http.post('http://localhost:8003/user/login', JSON.stringify(params), {headers: this._headers})
        .map((res: Response) => res.json())
        .subscribe(
            data => this.onSuccess(data),
            err => this.onError(err),
            () => window.alert('Successfully Logged in!')
        )
    }
    
    public getProfile(params) {
        this._headers.set('Authorization', 'Bearer ' + this.user.getSessionKey());
        return this._http.post('http://localhost:8003/user/getProfile', JSON.stringify({}), {headers: this._headers})
        .map((res: Response) => res.json())
    }
    
    public updateProfile(params) {
        this._headers.set('Authorization', 'Bearer ' + this.user.getSessionKey());
        return this._http.post('http://localhost:8003/user/updateProfile', JSON.stringify(params), {headers: this._headers})
        .map((res: Response) => res.json())
        .subscribe(
            data => console.log(data),
            err => this.onError(err),
            () => window.alert('Successfully updated profile!')
        )
    }
    
    onError(err) {
        window.alert('Failed: ' + JSON.parse(err._body).message + ' ' + JSON.parse(err._body).description);
        console.error('There was an error: ' + JSON.parse(err._body).message);
    }
    
    onSuccess(data) {
        this.user.storeUserDetails(data)
        this._router.navigate(['Home']);
    }
}