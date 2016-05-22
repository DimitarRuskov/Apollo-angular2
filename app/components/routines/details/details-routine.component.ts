import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {RoutineModel} from './../routine.model';
import {RoutineService} from './../routine.service';

declare var jQuery: any;

@Component({
    templateUrl:        'app/components/routines/details/details-routine.component.html',
    styleUrls:          ['app/components/routines/details/details-routine.component.css'],
    providers: [RoutineService]
})

export class DetailsRoutineComponent implements OnInit {
    constructor() {
        
    }
    
    ngOnInit() {
        jQuery('ul.tabs').tabs();
        jQuery('.modal-trigger').leanModal();
    }
    
    addComment( ) {
        debugger;
    }
}
