import {Component, ElementRef, OnInit}                  from '@angular/core';
import {FormBuilder, Validators, Control, ControlGroup} from '@angular/common';

import {ControlMessage}     from 'shared/components/control-message/control-message.component';
import {ValidationService}  from 'shared/services/validation.service';

import {ProfileModel}       from './profile.model';
import {UserService}        from 'shared/services/user.service';
import {AuthService}        from 'shared/services/auth.service';


@Component({
    templateUrl:        'app/components/profile/edit-profile.component.html',
    styleUrls:          ['app/components/profile/edit-profile.component.css'],
    providers:          [UserService, AuthService],
    directives:         [ControlMessage]
})

export class EditProfileComponent implements OnInit{
    form: any;
    profileDetails: ProfileModel;
    private _selectedImage: any = null;
    
    constructor(private _formBuilder: FormBuilder, private element: ElementRef, private _userService: UserService, private _auth: AuthService) { 
        this.profileDetails = new ProfileModel();
    }
    
    ngOnInit() {
        this._userService.getProfile(null)
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
    
    populateForm(profileDetails: any) {
        this.profileDetails = profileDetails;
        this.form.controls['name'].updateValue(this.profileDetails.name);
        this.form.controls['email'].updateValue(this.profileDetails.email);
        this.form.controls['dateOfBirth'].updateValue(this.profileDetails.dateOfBirth);
        this.form.controls['weight'].updateValue(this.profileDetails.weight);
        this.form.controls['height'].updateValue(this.profileDetails.height);
    }
    
    changeListener(event: any) {
        let reader = new FileReader();
        let image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e: any) {
            let src = e.target.result;
            this.form.controls['image'].updateValue(src);
            image.src = src;
        }.bind(this);

        reader.readAsDataURL(event.target.files[0]);
    }
    
    onSubmit(values: any): void {
        if(values.image === '') {
            values.image = undefined;
        }
        this._userService.updateProfile(values);
    }
    
    routerOnActivate(next: any, prev: any) {
        this._auth.doAuth(next);
    }
}
