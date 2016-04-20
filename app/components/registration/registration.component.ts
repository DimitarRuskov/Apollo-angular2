import {Component}          from 'angular2/core';
import {FormBuilder, Validators, Control, ControlGroup}  from 'angular2/common';
import {AuthService}        from '../../services/auth.service';
import {RegistrationModel}  from '../../models/registration.model';
import {ControlMessage}     from '../common/control-message.component';
import {ValidationService}  from '../../services/validation.service';

@Component({
  templateUrl:                  'app/components/registration/registration.component.html',
  styleUrls:                    ['app/components/registration/registration.component.css'],
  providers:                    [AuthService],
  directives:                   [ControlMessage]
})

export class RegistrationComponent {
    form:any;
    
    constructor(private _authService:AuthService, private _formBuilder: FormBuilder) {
		
        this.form = this._formBuilder.group({
            'username':         ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'email':            ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password':         ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'passwordConfirm':  ['', Validators.compose([Validators.required])]
        });
    }
    
    onSubmit(values) {
        this._authService.register(values);
    }
}