import {Component, ElementRef} from 'angular2/core';
import {FormBuilder, Validators, Control, ControlGroup}  from 'angular2/common';

import {ControlMessage}     from '../common/control-message.component';
import {ValidationService}  from '../../services/validation.service';

import {ProfileService} from '../../services/profile.service';

@Component({
    templateUrl:        'app/components/profile/edit-profile.component.html',
    styleUrls:          ['app/components/profile/edit-profile.component.css'],
    providers:          [ProfileService]
})

export class EditProfileComponent {
    form:any;
    private _selectedImage = null;
    constructor(private _formBuilder: FormBuilder, private element: ElementRef, private _profileService: ProfileService) {
        this.form = this._formBuilder.group({
            'name':             ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'email':            ['', Validators.compose([Validators.required, ValidationService.emailValidator])]
        });
    }
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
        this._profileService.updateProfile(values);
    }
}