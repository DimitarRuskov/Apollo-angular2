import {Component}          from '@angular/core';
import {Router}          from '@angular/router-deprecated';
import {FormBuilder, Validators}  from '@angular/common';
import {AuthService}        from 'shared/services/auth.service';
import {ControlMessage}     from 'shared/components/control-message/control-message.component';
import {ValidationService}  from 'shared/services/validation.service';
import {UtilsService}       from 'shared/services/utils.service';
import {UserService}       from 'shared/services/user.service';
import {StorageService}       from 'shared/services/storage.service';

@Component({
  templateUrl:                  'app/components/registration/registration.component.html',
  styleUrls:                    ['app/components/registration/registration.component.css'],
  directives:                   [ControlMessage],
  providers:                    [UtilsService, StorageService]
})

export class RegistrationComponent {
    form: any;
    
    constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private _router: Router,
    private _utilsService: UtilsService, private _storageService: StorageService, private _userService: UserService) {
        this.form = this._formBuilder.group({
            'username':         ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'email':            ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password':         ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'passwordConfirm':  ['', Validators.compose([Validators.required])]
        });
    }
    
    onSubmit(values: any) {
        this._authService.register(values)
        .subscribe(
            (data: any) => {
                this._storageService.set('user', data.userDetails, true);
                this._authService.load();
                this._userService.reloadUserDetails();
                this._router.navigate(['Home']);
            },
            (error: any) => this._utilsService.error(error),
            () => this._utilsService.success('Successfuly registered')
        );
    }
    
    canActivate(next: any, prev: any) {
        return !this._authService.authenticate(next);
    }
}
