import {Component, Output, EventEmitter, ElementRef} from '@angular/core';
import {Dragula, DragulaService} from 'ng2-dragula';
import {AddExerciseComponent} from './add-exercise.component'

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'apollo-add-exercises',
    templateUrl: 'exercises.component.html',
    styleUrls: ['exercises.component.css'],
    directives: [AddExerciseComponent, Dragula],
    providers: [DragulaService]
})

export class AddExercisesComponent {
    @Output() exercisesSubmit = new EventEmitter();
    @Output() backRedirect = new EventEmitter();

    private exercises: Array<any> = [];
    
    constructor(private element: ElementRef, private dragulaService: DragulaService) { }
    
    ngOnInit() {
        jQuery('.modal-trigger').leanModal();
        this.dragulaService.dropModel.subscribe((value: any) => {
            console.log(`drop: ${value[0]}`);
            this.onDrop(value.slice(1));
        });
    }

    onDrop(args: any) {
        let [e, el] = args;
    }

    onClickBack(event: any) {
        this.backRedirect.emit({});
    }

    onAddExercise(event: any) {
        this.exercises.push(event.exercise);
    }

    onAddBreak(event: any) {
        let inputElement = this.element.nativeElement.querySelector('#time');
        this.exercises.push({type: 'break', time: inputElement});
    }

    onDeleteExercise(index: any) {
        this.exercises.splice(index, 1);
    }

    onSubmit(values: any): void {
        debugger;
        this.exercisesSubmit.emit({
            exercises: this.exercises
        });
    }
}
