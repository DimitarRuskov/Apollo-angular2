 import {Component, Input}  from '@angular/core';
 import {RoutineModel}     from './routine.model';
 import {Router} from '@angular/router-deprecated';

@Component({
    selector:           'apollo-routine',
    templateUrl:        'app/components/routines/routine.component.html',
    styleUrls:          ['app/components/routines/routine.component.css']
})

export class RoutineComponent {
    @Input() routine: RoutineModel;
    
    constructor(private _router: Router) { }
    
    listExercises() {
        this._router.navigate(['Exercises', {
            category: this.routine.categoryId,
            routine: this.routine._id
        }]);
    }
    
    viewDetails() {
        this._router.navigate(['DetailsRoutine', {
            category: this.routine.categoryId,
            routine: this.routine._id
        }]);
    }
}
