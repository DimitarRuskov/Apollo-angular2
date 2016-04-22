import {Component, ElementRef} from 'angular2/core';
import {RoutineModel} from '../../models/routine.model';
import {RoutineService} from '../../services/routine.service';

@Component({
    templateUrl:        'app/components/routines/add-routine.component.html',
    styleUrls:          ['app/components/routines/add-routine.component.css'],
    providers:          [RoutineService]
})

export class AddRoutineComponent {
    private _selectedImage = null;
    constructor(private element: ElementRef, private _routineService: RoutineService) { }
     changeListner(event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e) {
            var src = e.target.result;
            this._selectedImage = src
            image.src = src;
        }.bind(this);

        reader.readAsDataURL(event.target.files[0]);
    }
    
    onSubmit(values): void {
        values.image = this._selectedImage;
        this._routineService.addCategory(values);
    }
}