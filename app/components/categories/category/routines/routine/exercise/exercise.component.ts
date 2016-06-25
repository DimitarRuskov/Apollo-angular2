import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'apollo-exercise',
    templateUrl: 'exercise.component.html',
    styleUrls: ['exercise.component.css'],
})

export class ExerciseComponent {
    @Input() exercise: any;

    ngOnInit() {
        
    }
}
