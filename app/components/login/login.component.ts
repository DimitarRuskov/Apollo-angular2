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
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [StorageService, UtilsService],
    directives: [ValidationMessageComponent]
})

export class LoginComponent {
    constructor(private _authService: AuthService, private _utilsService: UtilsService,
    private _storageService: StorageService, private _userService: UserService, private _router: Router) { }

    model = new UserCredentials('', '');
    submitted = false;
    active = true;

    isValid(input:any) {
        return input.valid || input.pristine;
    }
    
    onSubmit() {
        this._authService.login(this.model)
        .subscribe(
            (data: any) => {
                this._storageService.set('user', data.userDetails, true);
                this._userService.reloadUserDetails();
                this._router.navigate(['Home']);
            },
            (error: any) => {
                let errMsg = JSON.parse(error._body).description;
                this._utilsService.error(errMsg);
            },
            () => {
                this._utilsService.success('Logged in');
            }
        );
    }
    
    canActivate(next: any, prev: any) {
        return !this._authService.authenticate(next);
    }
}
