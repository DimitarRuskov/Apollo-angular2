import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {NotificationsService, SimpleNotificationsComponent} from 'angular2-notifications/components';

import {HomeComponent} from './components/home/home.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {AddCategoryComponent} from './components/categories/add/add-category.component';
import {CategoryComponent} from './components/categories/category/category.component';
import {AddRoutineComponent} from './components/categories/category/routines/add/add-routine.component';
import {RoutineComponent} from './components/categories/category/routines/routine/routine.component';
import {EditProfileComponent} from './components/profile/edit-profile.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';

import {StorageService} from './shared/services/storage.service';
import {UserService} from './shared/services/user.service';
import {HttpService} from './shared/services/http.service';
import {UtilsService} from './shared/services/utils.service';
import {AuthService} from './shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'apollo-root',
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.css'],
    directives: [ROUTER_DIRECTIVES, SimpleNotificationsComponent, NavbarComponent],
    providers: [HttpService, NotificationsService, UtilsService, UserService, StorageService, AuthService]
})

@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/categories', name: 'Categories', component: CategoriesComponent},
    {path: '/categories/add', name: 'AddCategory', component: AddCategoryComponent},
    {path: '/categories/:category/routines', name: 'Category', component: CategoryComponent},
    {path: '/categories/:category/routines/add', name: 'AddRoutine', component: AddRoutineComponent},
    {path: '/categories/:category/routines/:routine', name: 'Routine', component: RoutineComponent},
    {path: '/register', name: 'Registration', component: RegistrationComponent},
    {path: '/login', name: 'Login', component: LoginComponent},
    {path: '/profile', name: 'Profile', component: EditProfileComponent},
    {path: '/**', redirectTo: ['Home']}
])

export class RootComponent implements OnInit {
    routes: Object;
    
    public options = { //   these are default options, not optimal; to be exported in config file
        timeOut: 5000,
        lastOnBottom: true,
        clickToClose: true,
        maxLength: 0,
        maxStack: 7,
        showProgressBar: true,
        pauseOnHover: true,
        preventDuplicates: false,
        preventLastDuplicates: 'visible'
    };
    
    constructor(private _router: Router, private _authService: AuthService,
    private _userService: UserService, private _storageService: StorageService) { }
    
    ngOnInit() {
        let user = this._storageService.get('user', true);
        
        if (user) {
            this._authService.load();
            this._userService.reloadUserDetails();
        }
        
        this.routes = {
            left: [
                {name: 'Home', access: 'public'},
                {name: 'Categories', access: 'auth'}
            ],
            right: [
                {name: 'Login', access: 'noAuth'},
                {name: 'Registration', access: 'noAuth'}
            ],
            profile: {
                name: 'Profile'
            }
        };
    }
    
    onCreate(event: any) {
        console.log(event);
    }

    onDestroy(event: any) {
        console.log(event);
    }
}
