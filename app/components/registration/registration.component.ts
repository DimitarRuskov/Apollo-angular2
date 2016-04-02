import {Component}              from 'angular2/core';
import {NgForm}                 from 'angular2/common';
import {AuthService}            from '../../services/auth.service';

@Component({
  templateUrl:                  'app/components/registration/registration.component.html',
  styleUrls:                    ['app/components/registration/registration.component.css'],
  providers:                    [AuthService]
})

export class RegistrationComponent {
    constructor(private _authService: AuthService) { }
    
    onSubmit(values: Object): void {  
        this._authService.register(values);
    }
}