import {Component, OnInit}              from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

import {NavbarComponent}                from './shared/components/navbar/navbar.component';
import {NotificationsService, SimpleNotificationsComponent} from 'angular2-notifications/components';

import {HomeComponent}                  from './components/home/home.component';
import {ListCategoriesComponent}        from './components/categories/list/list-categories.component';
import {AddCategoryComponent}           from './components/categories//add/add-category.component';
import {ListRoutinesComponent}          from './components/routines//list/list-routines.component';
import {AddRoutineComponent}            from './components/routines/add/add-routine.component';
import {EditProfileComponent}           from './components/profile/edit-profile.component';
import {RegistrationComponent}          from './components/registration/registration.component';
import {LoginComponent}                 from './components/login/login.component';

import {StorageService}                 from './shared/services/storage.service';
import {UserService}                    from './shared/services/user.service';
import {HttpService}                    from './shared/services/http.service';
import {UtilsService}                   from './shared/services/utils.service';
import {AuthService}                    from './shared/services/auth.service';

@Component({
    selector: 'apollo-root',
    templateUrl: 'app/root.component.html',
    styleUrls: ['app/root.component.css'],
    directives: [ROUTER_DIRECTIVES, SimpleNotificationsComponent, NavbarComponent],
    providers: [HttpService, NotificationsService, UtilsService, UserService, StorageService, AuthService]
})

@RouteConfig([
    {path: '/home',          name: 'Home',           component: HomeComponent,               useAsDefault: true},
    {path: '/categories',    name: 'Categories',     component: ListCategoriesComponent},
    {path: '/categories/add',name: 'AddCategory',    component: AddCategoryComponent},
    {path: '/routines',      name: 'Routines',       component: ListRoutinesComponent},
    {path: '/routines/add',  name: 'AddRoutine',     component: AddRoutineComponent},
    {path: '/register',      name: 'Registration',   component: RegistrationComponent},
    {path: '/login',         name: 'Login',          component: LoginComponent},
    {path: '/profile',       name: 'Profile',        component: EditProfileComponent},
    {path: '/**',            redirectTo: ['Home']}
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
    
    constructor(private _router: Router, private _authService: AuthService) { }
    
    ngOnInit() {
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