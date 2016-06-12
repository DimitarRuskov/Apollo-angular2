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
    private _selectedImage: any = null;
    
    constructor(private element: ElementRef, private _addCategoryService: AddCategoryService,
    private _authService: AuthService, private _utilsService: UtilsService, private _router: Router) { }

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
        values.image = this._selectedImage;
        this._addCategoryService.addCategory(values)
        .subscribe(
            (data: any) => {
                this._router.navigate(['Categories']);
            },
            (error: any) => {
                this._utilsService.error(error);
            },
            () => {
                this._utilsService.success('Successfully created category');
            }
        );
    }

    canActivate(next: any, prev: any) {
        return this._authService.authenticate(next);
    }
}
