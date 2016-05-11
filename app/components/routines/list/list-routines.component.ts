import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {RoutineComponent} from './../routine.component';
import {RoutineModel} from './../routine.model';
import {RoutineService} from './../routine.service';
import {UserService} from 'shared/services/user.service';

@Component({
    templateUrl:        'app/components/routines/list/list-routines.component.html',
    styleUrls:          ['app/components/routines/list/list-routines.component.css'],
    directives: [RoutineComponent],
    providers: [RoutineService, UserService]
})

export class ListRoutinesComponent implements OnInit {
    public routines:Array<RoutineModel> = [];
    private _categoryId:String;
    constructor(private _routineService:RoutineService, private _router:Router, private _routeParams:RouteParams, private user:UserService) { }
    
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