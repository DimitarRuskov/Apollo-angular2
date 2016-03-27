import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from './forum/components/about.component';
import {ForumComponent} from './forum/components/forum.component';
import {NavbarComponent} from './shared/components/navbar.component';

@Component({
    selector: 'im-root',
    template: `
        <im-navbar></im-navbar>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/about',      name: 'About',   component: AboutComponent},
    {path:'/forum',      name: 'Forum',   component: ForumComponent}
])

export class RootComponent {
    title = 'Apollo';
}

// @Component({
//     selector: 'im-root',
//     template: `
//         <nav>
//             <a [routerLink]="['About']">About</a>
//             <a [routerLink]="['Forum']">Forum</a>
//         </nav>
//         <router-outlet></router-outlet>
//     `,
//     directives: [NavbarComponent, ROUTER_DIRECTIVES]
// })