import {Component}      from '@angular/core';
import {AuthService}    from 'shared/services/auth.service';

@Component({
    templateUrl:        'app/components/login/login.component.html',
    styleUrls:          ['app/components/login/login.component.css'],
    providers:          [AuthService]
})
export class LoginComponent {
    constructor(private _authService: AuthService) { }
    
    onSubmit(values: Object): void {
        this._authService.login(values);
    }
}
