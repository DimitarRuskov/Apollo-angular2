import {Component, ElementRef} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {AddCategoryService} from './add-category.service';
import {AuthService} from 'shared/services/auth.service';
import {UtilsService} from 'shared/services/utils.service';

@Component({
    moduleId: module.id,
    templateUrl: 'add-category.component.html',
    styleUrls: ['add-category.component.css'],
    providers: [AddCategoryService, UtilsService]
})

export class AddCategoryComponent {
    
    constructor(private element: ElementRef, private _addCategoryService: AddCategoryService,
    private _authService: AuthService, private _utilsService: UtilsService, private _router: Router) { }

    
    
    canActivate(next: any, prev: any) {
        return this._authService.authenticate(next);
    }
}
