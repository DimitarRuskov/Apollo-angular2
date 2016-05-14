import {Component, Input, Output, EventEmitter, OnInit, ElementRef} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AuthService} from 'shared/services/auth.service';
import {UserService} from 'shared/services/user.service';

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
    
    constructor(private el: ElementRef, private _authService: AuthService, private _userService: UserService) {
        this.userDetails = this._userService.getUserDetails();
    }
    
    ngOnInit() {
        jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
        jQuery(this.el.nativeElement).find(".dropdown-button").dropdown();
    }
    
    logout() {
        AuthService.logout();
    }
}
