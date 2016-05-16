import {Component, ElementRef} from '@angular/core';
import {CategoryModel} from './../category.model';
import {CategoryService} from './../category.service';
import {AuthService} from 'shared/services/auth.service';

@Component({
    templateUrl:        'app/components/categories/add/add-category.component.html',
    styleUrls:          ['app/components/categories/add/add-category.component.css'],
    providers:          [CategoryService, AuthService]
})

export class AddCategoryComponent {
    private _selectedImage: any = null;
    constructor(private element: ElementRef, private _categoryService: CategoryService, private _auth: AuthService) { }
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
    
    onSubmit(values: any): void {
        values.image = this._selectedImage;
        this._categoryService.addCategory(values);
    }
    
    routerOnActivate(next: any, prev: any) {
        this._auth.doAuth(next);
    }
}
