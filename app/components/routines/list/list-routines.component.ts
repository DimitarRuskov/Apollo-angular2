import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {RoutineComponent} from './../routine.component';
import {RoutineModel} from './../routine.model';
import {RoutineService} from './../routine.service';
import {AuthService} from 'shared/services/auth.service';

@Component({
    templateUrl:        'app/components/routines/list/list-routines.component.html',
    styleUrls:          ['app/components/routines/list/list-routines.component.css'],
    directives: [RoutineComponent],
    providers: [RoutineService]
})

export class ListRoutinesComponent implements OnInit {
    public routines: Array<RoutineModel> = [];
    private _categoryId: String;
    private _isAuth: boolean;
    
    constructor(private _routineService: RoutineService, private _router: Router, private _routeParams: RouteParams, private _authService: AuthService) {
        this._isAuth = this._authService.isAuthenticated();
        this._authService.isAuthenticated$.subscribe(
            (data: any) => {
                this._isAuth = data;
            }
        );
    }
    
    ngOnInit() {
        this._categoryId = this._routeParams.get('categoryId');
        this._routineService.listRoutines({categoryId: this._categoryId})
        .subscribe(
            (data: any) => this.routines = data.routines,
            (err: any) => console.log(err),
            () => console.log(this.routines)
        );
    }
    
    addRoutine() {
        this._router.navigate(['AddRoutine', {categoryId: this._categoryId}]);
    }
}
