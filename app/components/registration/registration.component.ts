import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NgForm} from '@angular/forms';
import {AuthService} from 'shared/services/auth.service';
import {UtilsService} from 'shared/services/utils.service';
import {StorageService} from 'shared/services/storage.service';
import {UserService} from 'shared/services/user.service';
import {ValidationMessageComponent} from 'shared/components/validation-message/validation-message.component';
import {UserCredentials} from 'shared/models/user-credentials.model';

@Component({
    moduleId: module.id,
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css'],
    providers: [UtilsService, StorageService],
    directives: [ValidationMessageComponent]
})

export class RegistrationComponent {
    constructor(private _authService: AuthService, private _router: Router,
    private _utilsService: UtilsService, private _storageService: StorageService, private _userService: UserService) { }
    
    model = new UserCredentials('', '', '');
    submitted = false;
    active = true;

    isValid(input:any) {
        return input.valid || input.pristine;
    }

    isValidEmail(input:any) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input.value) || input.pristine;
    }

    isValidConfirmPswd(input:any) {
        function isMatchPswd() {
            return input.value && input.value.length && (input.value === this.model.password);
        }
        return isMatchPswd.bind(this)() || input.pristine;
    }

    onSubmit() {
        this._authService.register(this.model)
        .subscribe(
            (data: any) => {
                this._storageService.set('user', data.userDetails, true);
                this._authService.load();
                this._userService.reloadUserDetails();
                this._router.navigate(['Home']);
            },
            (error: any) => {
                let errMsg = JSON.parse(error._body).description;
                this._utilsService.error(errMsg)
            },
            () => this._utilsService.success('Successfuly registered')
        );
    }
    
    canActivate(next: any, prev: any) {
        return !this._authService.authenticate(next);
    }
}
