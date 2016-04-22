import {Component, OnInit, ElementRef} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {RoutineModel} from '../../models/routine.model';
import {RoutineService} from '../../services/routine.service';

@Component({
    templateUrl:        'app/components/routines/add-routine.component.html',
    styleUrls:          ['app/components/routines/add-routine.component.css'],
    providers:          [RoutineService]
})

export class AddRoutineComponent implements OnInit {
    private _selectedImage = null;
    private _categoryId:String;
    constructor(private element: ElementRef, private _routineService: RoutineService, private _routeParams:RouteParams) { }
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
    
    ngOnInit() {
        this._categoryId = this._routeParams.get('categoryId');
    }
    
    onSubmit(values): void {
        values.categoryId = this._categoryId;
        values.image = this._selectedImage;
        this._routineService.addRoutine(values);
    }
}