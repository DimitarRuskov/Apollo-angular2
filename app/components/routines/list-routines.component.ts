import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {RoutineComponent} from './routine.component';
import {RoutineModel} from '../../models/routine.model';
import {RoutineService} from '../../services/routine.service';

@Component({
    templateUrl:        'app/components/routines/list-routines.component.html',
    styleUrls:          ['app/components/routines/list-routines.component.css'],
    directives: [RoutineComponent],
    providers: [RoutineService]
})

export class ListRoutinesComponent implements OnInit {
    public routines:Array<RoutineModel> = [];
    private _categoryId:String;
    constructor(private _routineService:RoutineService, private _router:Router, private _routeParams:RouteParams) { }
    
    ngOnInit() {
        this._categoryId = this._routeParams.get('categoryId');
        this._routineService.listRoutines({categoryId: this._categoryId})
        .subscribe(
            data => this.routines = data.routines,
            err => console.log(err),
            () => console.log(this.routines)
        );
    }
    
    addRoutine() {
        this._router.navigate(['AddRoutine', {categoryId: this._categoryId}]);
    }
}