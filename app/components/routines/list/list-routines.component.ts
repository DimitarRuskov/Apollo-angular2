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
    public columns: number = 2;
    public routines: any = [];
    private _categoryId: String;
    private _isAuth: boolean;
    
    constructor(private _routineService: RoutineService, private _router: Router,
    private _routeParams: RouteParams, private _authService: AuthService) {
        this._isAuth = this._authService.isAuthenticated();
    }
    
    ngOnInit() {
        this._categoryId = this._routeParams.get('categoryId');
        this._routineService.listRoutines({categoryId: this._categoryId})
        .subscribe(
            (data: any) => this.buildDataList(data),
            (err: any) => console.log(err),
            () => console.log(this.routines)
        );
    }
    
    buildDataList(data: any) {
        data = data.routines;
        for (let i = 0; i < this.columns; i++) {
            this.routines[i] = new Array<RoutineModel>();
        }
        for (let i = 0; i < data.length; i++) {
            if ((i + 2) % 2 === 0) {
                this.routines[0].push(data[i]);
            } else {
                this.routines[1].push(data[i]);
            }
        }
    }
    
    addRoutine() {
        this._router.navigate(['AddRoutine', {categoryId: this._categoryId}]);
    }
}
