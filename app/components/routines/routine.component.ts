 import {Component, Input}  from 'angular2/core';
 import {RoutineModel}     from './routine.model';
 import {Router} from "angular2/router";

@Component({
    selector:           'apollo-routine',
    templateUrl:        'app/components/routines/routine.component.html',
    styleUrls:          ['app/components/routines/routine.component.css']
})

export class RoutineComponent {
    @Input () routine:RoutineModel;
    
    constructor(private _router:Router) { }
    
    listRoutines(routineId) {
        this._router.navigate(['Exercises', {routineId: routineId}])
    }
}