import {Component}      from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {AuthService}    from 'shared/services/auth.service';
import {UtilsService}    from 'shared/services/utils.service';
import {StorageService}    from 'shared/services/storage.service';
import {UserService}    from 'shared/services/user.service';

@Component({
    templateUrl:        'app/components/login/login.component.html',
    styleUrls:          ['app/components/login/login.component.css'],
    providers:          [StorageService, UtilsService]
})
export class LoginComponent {
    constructor(private _authService: AuthService, private _utilsService: UtilsService,
    private _storageService: StorageService, private _userService: UserService, private _router: Router) { }
    
    onSubmit(values: Object): void {
        this._authService.login(values)
        .subscribe(
            (data: any) => {
                this._storageService.set('user', data.userDetails, true);
                this._userService.reloadUserDetails();
                this._router.navigate(['Home']);
            },
            (error: any) => {
                this._utilsService.success(error);
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
