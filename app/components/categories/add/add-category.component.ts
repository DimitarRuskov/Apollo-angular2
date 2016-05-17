import {Component, ElementRef}  from '@angular/core';
import {CategoryService}        from './../category.service';
import {AuthService}            from 'shared/services/auth.service';
import {UtilsService}           from 'shared/services/utils.service';

@Component({
    templateUrl:        'app/components/categories/add/add-category.component.html',
    styleUrls:          ['app/components/categories/add/add-category.component.css'],
    providers:          [CategoryService, UtilsService]
})

export class AddCategoryComponent {
    private _selectedImage: any = null;
    constructor(private element: ElementRef, private _categoryService: CategoryService, private _authService: AuthService, private _utilsService: UtilsService) { }
    
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
        this._categoryService.addCategory(values)
        .subscribe(
            (data: any) => {
                
            },
            (error: any) => {
                
            },
            () => {
                this._utilsService.success('Logged in');
            }
        );
    }
    
    canActivate(next: any, prev: any) {
        return this._authService.authenticate(next);
    }
}
