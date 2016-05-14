import {Component}      from '@angular/core';
import {AuthService}    from 'shared/services/auth.service';
import {UtilsService}    from 'shared/services/utils.service';
import {StorageService}    from 'shared/services/storage.service';

@Component({
    templateUrl:        'app/components/login/login.component.html',
    styleUrls:          ['app/components/login/login.component.css'],
    providers:          [AuthService, StorageService, UtilsService]
})
export class LoginComponent {
    constructor(private _authService: AuthService, private _utilsService: UtilsService, private _storageService: StorageService) { }
    
    onSubmit(values: Object): void {
        this._authService.login(values)
        .subscribe(
            (data: any) => {
                this._storageService.set('user', data.userDetails);
                console.log(this._authService.isAuthenticated);
            },
            (error: any) => {
                this._utilsService.success(error);
            },
            () => {
                this._utilsService.success('Logged in');
            }
        );
    }
}
