import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector:           'apollo-navbar',
    templateUrl:        'app/shared/components/navbar/navbar.component.html',
    styleUrls:          ['app/shared/components/navbar/navbar.component.css'],
    directives:         [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
    @Input() routes:Object;
    @Input() isAuth:boolean;
    @Input() userDetails:Object;
    @Output() logout = new EventEmitter<boolean>(true);
    
    constructor() { }
    
    onLogout() {
        this.logout.emit(true);
    }
}