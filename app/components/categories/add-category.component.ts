import {Component, ElementRef} from 'angular2/core';
import {CategoryModel} from '../../models/category.model';
import {CategoryService} from '../../services/category.service';
import {AuthService} from '../../services/auth.service';

@Component({
    templateUrl:        'app/components/categories/add-category.component.html',
    styleUrls:          ['app/components/categories/add-category.component.css'],
    providers:          [CategoryService, AuthService]
})

export class AddCategoryComponent {
    private _selectedImage = null;
    constructor(private element: ElementRef, private _categoryService: CategoryService, private _auth: AuthService) { }
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
        this._categoryService.addCategory(values);
    }
    
    routerOnActivate(next, prev) {
        this._auth.doAuth(next);
    }
}