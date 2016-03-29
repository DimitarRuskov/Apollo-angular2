import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/common/navbar.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';

@Component({
    selector: 'im-root',
    template: `
        <nav>
            <a [routerLink]="['Home']">Home</a>
            <a [routerLink]="['Registration']">Register</a>
            <a [routerLink]="['Login']">Login</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/home',      name: 'Home',           component: HomeComponent,  useAsDefault: true},
    {path:'/register',  name: 'Registration',   component: RegistrationComponent},
    {path:'/login',     name: 'Login',          component: LoginComponent},
    { path: '/**',      redirectTo: ['Home'] }
])

export class RootComponent {
    title = 'Apollo';
}