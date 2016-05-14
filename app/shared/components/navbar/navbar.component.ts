import {Component, Input, Output, EventEmitter, OnInit, ElementRef} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

declare var jQuery: any;

@Component({
    selector:           'apollo-navbar',
    templateUrl:        'app/shared/components/navbar/navbar.component.html',
    styleUrls:          ['app/shared/components/navbar/navbar.component.css'],
    directives:         [ROUTER_DIRECTIVES]
})

export class NavbarComponent implements OnInit {
    @Input() routes:Object;
    @Input() isAuth:boolean;
    @Input() userDetails:Object;
    @Output() logout = new EventEmitter<boolean>(true);
    
    constructor(private el:ElementRef) { }
    
    ngOnInit() {
        jQuery(this.el.nativeElement).find('.button-collapse').sideNav();
        jQuery(this.el.nativeElement).find(".dropdown-button").dropdown();
    }
    
    onLogout() {
        this.logout.emit(true);
    }
}