import {Component, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'apollo-add-exercise',
    templateUrl: 'add-exercise.component.html',
    styleUrls: ['add-exercise.component.css'],
})

export class AddExerciseComponent {

    @Output() addExercise = new EventEmitter();

    constructor(private element: ElementRef) { }

    onAddExercise(event: any) {
        let inputElement = this.element.nativeElement.querySelector('#name');

        this.addExercise.emit({
            exercise: {
                type: 'exercise'
                name: inputElement.value
            }
        });

        inputElement.value = '';
    }
}
