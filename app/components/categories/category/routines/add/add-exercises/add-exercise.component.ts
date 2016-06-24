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

    constructor(private element: ElementRef) { }

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

    onAddExercise(event: any) {
        let inputElement = this.element.nativeElement.querySelector('#name');

        this.addExercise.emit({
            exercise: {
                type: 'exercise',
                name: inputElement.value
            }
        });

        inputElement.value = '';
    }
}
