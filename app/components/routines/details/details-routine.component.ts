import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {RoutineModel} from './../routine.model';
import {RoutineService} from './../routine.service';

import {UtilsService} from 'shared/services/utils.service';

declare var jQuery: any;

@Component({
    templateUrl:        'app/components/routines/details/details-routine.component.html',
    styleUrls:          ['app/components/routines/details/details-routine.component.css'],
    providers:          [RoutineService, UtilsService]
})

export class DetailsRoutineComponent implements OnInit {
    constructor(private _routineService: RoutineService, private _utilsService: UtilsService) {
        
    }
    
    ngOnInit() {
        jQuery('ul.tabs').tabs();
        jQuery('.modal-trigger').leanModal();
    }
    
    addComment( ) {
        let values = {
            
        }
        this._routineService.addComment(values)
        .subscribe(
            (data: any) => this.reloadComments(),
            (err: any) => this._utilsService.defaultErrorHandler(err),
            () => this._utilsService.success('Successfully commented the routine!')
        );
    }
    
    reloadComments() {
        
    }
}
