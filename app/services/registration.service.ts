import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class RegistrationService {
    _headers: any
    constructor(private _http:Http) {
        this._headers = new Headers();
        
    }
    
    public register(params) {
        this._http.post('http://localhost:8003/register', JSON.stringify(params), {headers: this._headers})
        .subscribe(
            data => this.formatResponse(data),
            err => this.logError(err),
            () => console.log('Authentication Complete')
        )
    }
    
    private formatResponse(response) {
        return response;
    }
    
    logError(err) {
        console.error('There was an error: ' + err);
    }
}