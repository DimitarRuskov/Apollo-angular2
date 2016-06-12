import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'apollo-add-exercises',
    templateUrl: 'add-exercises.component.html',
    styleUrls: ['add-exercises.component.css']
})

export class AddExercisesComponent {
    @Output() exercisesSubmit = new EventEmitter();
    @Output() backRedirect = new EventEmitter();

    private exercises: Array<any> = [];
    
    constructor() { }
    
    ngOnInit() {
        
    }

    onClickBack(event: any) {
        this.backRedirect.emit({});
    }

    onSubmit(values: any): void {
        this.exercisesSubmit.emit({
            exercises: this.exercises
        });
    }
}
