import {Component, OnInit, ElementRef} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {AddRoutineService} from './add-routine.service';
import {AuthService} from 'shared/services/auth.service';
import {UtilsService} from 'shared/services/utils.service';


import {AddDetailsComponent} from './add-details/add-details.component';
import {AddExercisesComponent} from './add-exercises/add-exercises.component';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    templateUrl: 'add-routine.component.html',
    styleUrls: ['add-routine.component.css'],
    directives: [AddDetailsComponent, AddExercisesComponent],
    providers: [AddRoutineService, UtilsService]
})

export class AddRoutineComponent implements OnInit {
    private _selectedImage: any = null;
    private _categoryId: String;
    private details: any;
    private exercises: Array<any>;
    
    constructor(private element: ElementRef, private _addRoutineService: AddRoutineService, private _router: Router,
    private _routeParams: RouteParams, private _authService: AuthService, private _utilsService: UtilsService) { }
     
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
    
    ngOnInit() {
        jQuery('ul.tabs').tabs();
        this._categoryId = this._routeParams.get('category');
    }
    
    onSubmit(values: any): void {
        values.details.categoryId = this._categoryId;
        this._addRoutineService.addRoutine(values)
        .subscribe(
            (data: any) => {
                this._router.navigate(['Categories']);
            },
            (err: any) => this._utilsService.defaultErrorHandler(err),
            () => this._utilsService.success('Successfully created Routine!')
        );
    }

    onDetailsSubmit(event: any): void {
        this.details = event.details;
        jQuery('#exercises-tab-button').removeClass('disabled');
        jQuery('ul.tabs').tabs('select_tab', 'exercises');
        jQuery('#details-tab-button').addClass('disabled');
    }

    onExercisesSubmit(event: any): void {
        this.exercises = event.exercises;
        this.onSubmit({
            details: this.details,
            exercises: this.exercises
        });
    }

    onBackRedirect(details: any): void {
        jQuery('#details-tab-button').removeClass('disabled');
        jQuery('ul.tabs').tabs('select_tab', 'details');
        jQuery('#exercises-tab-button').addClass('disabled');
    }
    
    canActivate(next: any, prev: any) {
        return this._authService.authenticate(next);
    }
}
