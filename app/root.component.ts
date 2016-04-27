import {Component, OnInit}              from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent}                from './components/shared/navbar.component';

import {HomeComponent}                  from './components/home/home.component';
import {ListCategoriesComponent}        from './components/categories/list-categories.component';
import {AddCategoryComponent}           from './components/categories/add-category.component';
import {ListRoutinesComponent}          from './components/routines/list-routines.component';
import {AddRoutineComponent}            from './components/routines/add-routine.component';
import {EditProfileComponent}           from './components/profile/edit-profile.component';
import {RegistrationComponent}          from './components/registration/registration.component';
import {LoginComponent}                 from './components/login/login.component';
import {UserService}                    from './services/user.service';
import {HttpService}                    from './services/http.service';
import {UtilsService}                   from './services/utils.service';

@Component({
    selector: 'apollo-root',
    templateUrl: 'app/root.component.html',
    styleUrls: ['app/root.component.css'],
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    providers: [UserService, HttpService, UtilsService]
})

@RouteConfig([
    {path:'/home',          name: 'Home',           component: HomeComponent,               useAsDefault: true},
    {path:'/categories',    name: 'Categories',     component: ListCategoriesComponent},
    {path:'add-category',   name: 'AddCategory',    component: AddCategoryComponent},
    {path:'/routines/',     name: 'Routines',       component: ListRoutinesComponent},
    {path:'/add-routine',   name: 'AddRoutine',     component: AddRoutineComponent},
    {path:'/register',      name: 'Registration',   component: RegistrationComponent},
    {path:'/login',         name: 'Login',          component: LoginComponent},
    {path:'/profile',       name: 'Profile',        component: EditProfileComponent},
    {path: '/**',           redirectTo: ['Home']}
])

export class RootComponent implements OnInit {
    routes:Object;
    constructor(private user: UserService) { }
    
    ngOnInit() {
        this.routes = {
            left: [
                {name: 'Home'},
                {name: 'Categories'}
            ],
            right: [
                {name: 'Login'},
                {name: 'Registration'}
            ]
        } 
    }
    
    public getUsername() {
        let details = this.user.getUserDetails();
        return details.username;
    }
    
    public getImageUrl() {
        return this.user.getUserDetails().imageUrl;
    }
    
    logout(event) {
        this.user.closeSession();
    }
}