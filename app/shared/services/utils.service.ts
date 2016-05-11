import {Router} from '@angular/router-deprecated';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {NotificationsService} from '@angular-notifications/components';

@Injectable()
export class UtilsService {
    constructor(private _router:Router, private _service:NotificationsService) { }
    
    public success(message:string, title?:string) {
        this._service.success(title || 'Success', message)
    }
    
    public error(message:string, title?:string) {
        this._service.error(title || 'Failed', message)
    }
    
    public alert(message:string, title?:string) {
        this._service.alert(title || 'Alert', message)
    }
    
    public info(message:string, title?:string) {
        this._service.info(title || 'Info', message)
    }
    
    public defaultErrorHandler(error) {
        this.error(JSON.parse(error._body).description);
        console.error('There was an error: ' + JSON.parse(error._body).message); 
    }
    
    public defaultSuccessHandler(data) {
        
    }
}
