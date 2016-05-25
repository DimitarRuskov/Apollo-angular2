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
    private _routineId: String;
    private exercises: Array<any>;
    private comments: Array<any>;
    constructor(private _routineService: RoutineService, private _routeParams: RouteParams, private _utilsService: UtilsService) {
        
    }
    
    ngOnInit() {
        jQuery('ul.tabs').tabs();
        jQuery('.modal-trigger').leanModal();
        this._routineId = this._routeParams.get('routineId');
        this._routineService.getDetails({routineId: this._routineId})
        .subscribe(
            (data: any) => this.buildDataList(data),
            (err: any) => console.log(err),
            () => console.log('detailes fetched')
        );
    }
    
    buildDataList(data: any) {
        this.exercises = data.exercises;
        this.comments = data.comments;
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
