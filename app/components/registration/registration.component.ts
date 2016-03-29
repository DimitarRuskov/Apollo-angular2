import {Component}              from 'angular2/core';
import {NgForm}                 from 'angular2/common';
import {RegistrationService}    from '../../services/registration.service';
import {ValidationService}      from '../../services/validation.service';

@Component({
  templateUrl:                  'app/components/registration/registration.component.html',
  styleUrls:                    ['app/components/registration/registration.component.css'],
  providers:                    [RegistrationService, ValidationService, ]
})

export class RegistrationComponent {
    constructor(private _registrationService: RegistrationService) { }
    
    onSubmit(values) {
         this._registrationService.register(values);
    }
    
    
}