import {Component}          from '@angular/core';
import {FormBuilder, Validators}  from '@angular/common';
import {AuthService}        from 'shared/services/auth.service';
import {ControlMessage}     from 'shared/components/control-message/control-message.component';
import {ValidationService}  from 'shared/services/validation.service';

@Component({
  templateUrl:                  'app/components/registration/registration.component.html',
  styleUrls:                    ['app/components/registration/registration.component.css'],
  directives:                   [ControlMessage]
})

export class RegistrationComponent {
    form: any;
    
    constructor(private _formBuilder: FormBuilder, private _authService: AuthService) {
		
        this.form = this._formBuilder.group({
            'username':         ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'email':            ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password':         ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'passwordConfirm':  ['', Validators.compose([Validators.required])]
        });
    }
    
    onSubmit(values: any) {
        this._authService.register(values);
    }
    
    canActivate(next: any, prev: any) {
        return !this._authService.authenticate(next);
    }
}
