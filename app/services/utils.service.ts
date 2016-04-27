import {Router} from 'angular2/router';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilsService {
    constructor(private _router: Router) {
    }
    
    public defaultErrorHandler(error) {
        window.alert('Failed: ' + JSON.parse(error._body).message + ' ' + JSON.parse(error._body).description);
        console.error('There was an error: ' + JSON.parse(error._body).message); 
    }
    
    public defaultSuccessHandler(data) {
        
    }
}