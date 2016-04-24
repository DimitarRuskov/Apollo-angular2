import {Component, ElementRef, OnInit}                  from 'angular2/core';
import {FormBuilder, Validators, Control, ControlGroup} from 'angular2/common';

import {ControlMessage}     from '../common/control-message.component';
import {ValidationService}  from '../../services/validation.service';

import {ProfileModel}       from '../../models/profile.model';
import {AuthService}        from '../../services/auth.service';

@Component({
    templateUrl:        'app/components/profile/edit-profile.component.html',
    styleUrls:          ['app/components/profile/edit-profile.component.css'],
    providers:          [AuthService],
    directives:         [ControlMessage]
})

export class EditProfileComponent implements OnInit{
    form:any;
    profileDetails:ProfileModel;
    private _selectedImage = null;
    
    constructor(private _formBuilder: FormBuilder, private element: ElementRef, private _authService: AuthService) { 
        this.profileDetails = new ProfileModel();
    }
    
    ngOnInit() {
        this._authService.getProfile({})
        .subscribe(
            data => this.populateForm(data.profileDetails),
            err => console.log(err),
            () => console.log('Successfully fetched data')
        );
        
        this.form = this._formBuilder.group({
            'image':            ['', Validators.compose([])],
            'name':             ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'email':            ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'dateOfBirth':      ['', Validators.compose([])],
            'weight':           ['', Validators.compose([])],
            'height':           ['', Validators.compose([])]
        });
    }
    
    populateForm(profileDetails) {
        this.profileDetails = profileDetails;
        this.form.controls['name'].updateValue(this.profileDetails.name);
        this.form.controls['email'].updateValue(this.profileDetails.email);
        this.form.controls['dateOfBirth'].updateValue(this.profileDetails.dateOfBirth);
        this.form.controls['weight'].updateValue(this.profileDetails.weight);
        this.form.controls['height'].updateValue(this.profileDetails.height);
    }
    
    changeListener(event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e) {
            var src = e.target.result;
            this.form.controls['image'].updateValue(src);
            image.src = src;
        }.bind(this);

        reader.readAsDataURL(event.target.files[0]);
    }
    
    onSubmit(values): void {
        if(values.image === '') {
            values.image = undefined;
        }
        this._authService.updateProfile(values);
    }
}