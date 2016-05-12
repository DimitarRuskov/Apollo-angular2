import {Component, OnInit, ElementRef} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {RoutineModel} from './../routine.model';
import {RoutineService} from './../routine.service';
import {AuthService} from 'shared/services/auth.service';

@Component({
    templateUrl:        'app/components/routines/add/add-routine.component.html',
    styleUrls:          ['app/components/routines/add/add-routine.component.css'],
    providers:          [RoutineService, AuthService]
})

export class AddRoutineComponent implements OnInit {
    private _selectedImage: any = null;
    private _categoryId: String;
    constructor(private element: ElementRef, private _routineService: RoutineService, private _routeParams: RouteParams, private _auth: AuthService) { }
     changeListner(event: any) {
        let reader = new FileReader();
        let image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e: any) {
            let src = e.target.result;
            this._selectedImage = src;
            image.src = src;
        }.bind(this);

        reader.readAsDataURL(event.target.files[0]);
    }
    
    ngOnInit() {
        this._categoryId = this._routeParams.get('categoryId');
    }
    
    onSubmit(values: any): void {
        values.categoryId = this._categoryId;
        values.image = this._selectedImage;
        this._routineService.addRoutine(values);
    }
    
    routerOnActivate(next: any, prev: any) {
        this._auth.doAuth(next);
    }
}
