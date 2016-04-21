import {Component, ElementRef} from 'angular2/core';
import {ProfileService} from '../../services/profile.service';

@Component({
    templateUrl:        'app/components/profile/edit-profile.component.html',
    styleUrls:          ['app/components/profile/edit-profile.component.css'],
    providers:          [ProfileService]
})

export class EditProfileComponent {
    private _selectedImage = null;
    constructor(private element: ElementRef, private _profileService: ProfileService) { }
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