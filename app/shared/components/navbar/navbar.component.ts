import {Component, Input, OnInit, ElementRef} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Router} from '@angular/router-deprecated';
import {AuthService} from 'shared/services/auth.service';
import {UserService} from 'shared/services/user.service';
import {UtilsService} from 'shared/services/utils.service';

declare var jQuery: any;

@Component({
    selector:           'apollo-navbar',
    templateUrl:        'app/shared/components/navbar/navbar.component.html',
    styleUrls:          ['app/shared/components/navbar/navbar.component.css'],
    directives:         [ROUTER_DIRECTIVES]
})

export class NavbarComponent implements OnInit {
    @Input() routes: Object;
    userDetails: Object;
    isAuth: boolean;
    
    constructor(private el: ElementRef, private _authService: AuthService, private _userService: UserService,
    private _router: Router, private _utilsService: UtilsService) {
        this.isAuth = false;
        let __this = this;
        this._authService.isAuthenticated$.subscribe(
            (data: any) => {
                __this.isAuth = data;
            }
        );
        
        this._userService.userDetails$.subscribe(
            (data: any) => {
                this.userDetails = data;
            }
        );
    }
    
    ngOnInit() {
        jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
        jQuery(this.el.nativeElement).find('.dropdown-button').dropdown();
    }
    
    logout() {
        this._authService.logout()
        .subscribe(
            (data: any) => {
                this._router.navigate(['Home']);
                this._utilsService.success('Logged out');
            },
            (error: any) => {
                this._router.navigate(['Home']);
                this._utilsService.error(error.message);
            }
        );
    }
}
