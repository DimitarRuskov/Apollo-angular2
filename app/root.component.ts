import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from './forum/components/about.component';
import {ForumComponent} from './forum/components/forum.component';

@Component({
    selector: 'im-root',
    template: `
        <h1>Component Router</h1>
        <nav>
            <a [routerLink]="['About']">About</a>
            <a [routerLink]="['Forum']">Forum</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/about',      name: 'About',   component: AboutComponent},
    {path:'/forum',      name: 'Forum',   component: ForumComponent}
])

export class RootComponent {
    title = 'Apollo';
}
