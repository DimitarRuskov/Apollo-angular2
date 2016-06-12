import {Component, Output, ElementRef, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'apollo-add-details',
    templateUrl: 'add-details.component.html',
    styleUrls: ['add-details.component.css']
})

export class AddDetailsComponent {
    @Output() detailsSubmit = new EventEmitter();

    private _selectedImage: any = null;
    
    constructor(private element: ElementRef) { }

    onImageClick(event: any) {
        let imagePicker = this.element.nativeElement.querySelector('.image-picker');
        imagePicker.click();
    }
    
    changeListener(event: any) {
        let reader = new FileReader();
        let image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e: any) {
            let src = e.target.result;
            this._selectedImage = src;
            image.src = src;
        }.bind(this);

        reader.readAsDataURL(event.target.files[0]);
    }
    
    onSubmit(values: any): void {
        this.detailsSubmit.emit({
            details: values
        });
    }
}
