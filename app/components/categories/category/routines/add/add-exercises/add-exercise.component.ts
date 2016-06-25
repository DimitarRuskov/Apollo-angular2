import {Component, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'apollo-add-exercise',
    templateUrl: 'add-exercise.component.html',
    styleUrls: ['add-exercise.component.css'],
})

export class AddExerciseComponent {
    @Output() addExercise = new EventEmitter();
    private sets: string = '4';
    private duration: number;;
    private defaultDuration: number = 60;
    private repetitions: string = '0';
    private minutes: string;
    private seconds: string = '00';
    private showDuration: boolean = true;
    private showRepetitions: boolean = false;
    private _selectedImage: any = null;

    constructor(private element: ElementRef) { }

    ngOnInit() {
        this.duration = this.defaultDuration;
        this.minutes = (Math.floor(this.duration / 60) < 10) ? '0' + Math.floor(this.duration / 60) : '' + Math.floor(this.duration / 60);
    }

    onImageClick(event: any) {
        let imagePicker = this.element.nativeElement.querySelector('.image-picker');
        imagePicker.click();
    }
    
    onImageChange(event: any) {
        let reader = new FileReader();
        let image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e: any) {
            let src = e.target.result;
            this._selectedImage = src;
            image.src = src;
        }.bind(this);

        reader.readAsDataURL(event.target.files[0]);
    }

    onSetsChange(event: any) {
        this.sets = event;
    }

    onDurationChange(event: any) {
        let val = parseInt(event);
        this.duration = val;
        this.minutes = (Math.floor(val / 60) < 10) ? '0' + Math.floor(val / 60) : '' + Math.floor(val / 60);
        this.seconds = (Math.floor(val % 60) < 10) ? '0' + Math.floor(val % 60) : '' + Math.floor(val % 60);
    }

    onRepetitionsChange(event: any) {
        this.repetitions = event;
    }

    showDurationInput() {

        this.showRepetitions = false;
        this.showDuration = true;
    }

    showRepetitionsInput() {
        this.showRepetitions = true;
        this.showDuration = false;
    }

    onAddExercise(event: any) {
        let name = this.element.nativeElement.querySelector('#name').value;
        let description = this.element.nativeElement.querySelector('#description').value;
        let exercise = {
            name: name,
            description: description,
            sets: this.sets,
            image: this._selectedImage
        }
        if (this.showDuration) {
            exercise['duration'] = this.duration;
        } else {
            exercise['repetitions'] = this.repetitions;
        }

        this.addExercise.emit({
            exercise: exercise
        });
    }
}
