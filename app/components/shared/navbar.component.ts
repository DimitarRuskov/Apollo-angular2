import {Component, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector:           'apollo-navbar',
    templateUrl:        'app/components/shared/navbar.component.html',
    styleUrls:          ['app/components/shared/navbar.component.css'],
    directives:         [ROUTER_DIRECTIVES]
})

export class NavbarComponent implements OnInit {
    @Input() routes:Object;
    
    constructor() { }
    
    ngOnInit() {
    }
}