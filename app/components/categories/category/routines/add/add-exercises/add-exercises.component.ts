import {Component, Output, EventEmitter, ElementRef} from '@angular/core';
import {Dragula, DragulaService} from 'ng2-dragula';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'apollo-add-exercises',
    templateUrl: 'add-exercises.component.html',
    styleUrls: ['add-exercises.component.css'],
    directives: [Dragula],
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

    addExercise(event: any) {
        let inputElement = this.element.nativeElement.querySelector('#name');
        this.exercises.push({name: inputElement.value});
        inputElement.value = '';
    }

    onSubmit(values: any): void {
        debugger;
        this.exercisesSubmit.emit({
            exercises: this.exercises
        });
    }
}
