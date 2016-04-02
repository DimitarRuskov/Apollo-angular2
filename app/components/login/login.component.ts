import {Component}      from 'angular2/core';
import {UserService}    from '../../services/user.service';
import {AuthService}    from '../../services/auth.service';

@Component({
    templateUrl:    'app/components/login/login.component.html',
    providers:      [AuthService]
})
export class LoginComponent {
    constructor(private _user: UserService, private _authService: AuthService) { }
    
    onSubmit(values: Object): void {
        this._authService.login(values)
        .subscribe(res => this._user.setSessionKey(res.sessionKey))
    }
}