import {Component, Output, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl:        'add-details.component.html',
    styleUrls:          ['add-details.component.css'],
    providers:          []
})

export class AddDetailsComponent {
    private _selectedImage: any = null;
    
    constructor(private element: ElementRef) { }
    
    ngOnInit() {
        
    }

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
        debugger;
    }
}
