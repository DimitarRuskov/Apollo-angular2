import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

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