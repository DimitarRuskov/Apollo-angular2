import {Http, Headers, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    _headers: any
    constructor(private _http:Http) {
        
    }
    
    public register(params) {
        this._http.post('http://localhost:8003/register', JSON.stringify(params))
        .subscribe(
            data => this.formatResponse(data),
            err => this.logError(err),
            () => console.log('Authentication Complete')
        )
    }
    
    public login(params) {
        return this._http.post('http://localhost:8003/login', JSON.stringify(params))
        .map((res: Response) => res.json())
    }
    
    private formatResponse(response) {
        // localStorage.setItem('sessionKey', response.msg);
        return response;
    }
    
    logError(err) {
        console.error('There was an error: ' + err);
    }
}