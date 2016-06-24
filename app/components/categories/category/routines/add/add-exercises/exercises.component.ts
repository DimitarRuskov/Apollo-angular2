import {Component, Output, EventEmitter, ElementRef} from '@angular/core';
import {Dragula, DragulaService} from 'ng2-dragula';
import {AddExerciseComponent} from './add-exercise.component';
import {TimeFormatPipe} from 'shared/pipes/time-format.pipe'

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'apollo-add-exercises',
    templateUrl: 'exercises.component.html',
    styleUrls: ['exercises.component.css'],
    directives: [AddExerciseComponent, Dragula],
    providers: [DragulaService],
    pipes: [TimeFormatPipe]
})

export class AddExercisesComponent {
    @Output() exercisesSubmit = new EventEmitter();
    @Output() backRedirect = new EventEmitter();

    private exercises: Array<any> = [];
    private time: number;
    private minutes: string;
    private seconds: string = '00';
    private defaultTime: number = 60;
    
    constructor(private element: ElementRef, private dragulaService: DragulaService) { }
    
    ngOnInit() {
        jQuery('.dropdown-button').dropdown();
        jQuery('.modal-trigger').leanModal();
        this.dragulaService.dropModel.subscribe((value: any) => {
            console.log(`drop: ${value[0]}`);
            this.onDrop(value.slice(1));
        });
        this.time = this.defaultTime;
        this.minutes = (Math.floor(this.time / 60) < 10) ? '0' + Math.floor(this.time / 60) : '' + Math.floor(this.time / 60);
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
        this.exercises.push({type: 'break', time: inputElement.value});
    }

    onDeleteExercise(index: any) {
        this.exercises.splice(index, 1);
    }

    onChange(event: any) {
        let val = parseInt(event);
        this.time = val;
        this.minutes = (Math.floor(val / 60) < 10) ? '0' + Math.floor(val / 60) : '' + Math.floor(val / 60);
        this.seconds = (Math.floor(val % 60) < 10) ? '0' + Math.floor(val % 60) : '' + Math.floor(val % 60);
    }

    onSubmit(values: any): void {
        debugger;
        this.exercisesSubmit.emit({
            exercises: this.exercises
        });
    }
}
