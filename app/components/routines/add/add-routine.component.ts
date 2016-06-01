import {Component, OnInit, ElementRef} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {RoutineService} from './../routine.service';
import {AuthService} from 'shared/services/auth.service';
import {UtilsService} from 'shared/services/utils.service';

declare var jQuery: any;

@Component({
    templateUrl:        'app/components/routines/add/add-routine.component.html',
    styleUrls:          ['app/components/routines/add/add-routine.component.css'],
    providers:          [RoutineService, UtilsService]
})

export class AddRoutineComponent implements OnInit {
    private _selectedImage: any = null;
    private _categoryId: String;
    
    constructor(private element: ElementRef, private _routineService: RoutineService, private _router: Router,
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
        jQuery('ul.tabs').tabs('select_tab', 'exercises');
        // values.categoryId = this._categoryId;
        // values.image = this._selectedImage;
        
        // this._routineService.addRoutine(values)
        // .subscribe(
        //     (data: any) => {
        //         this._router.navigate(['Categories']);
        //     },
        //     (err: any) => this._utilsService.defaultErrorHandler(err),
        //     () => this._utilsService.success('Successfully created Routine!')
        // );
    }
    
    canActivate(next: any, prev: any) {
        return this._authService.authenticate(next);
    }
}
