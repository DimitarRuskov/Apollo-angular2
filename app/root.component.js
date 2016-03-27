System.register(['angular2/core', 'angular2/router', './forum/components/about.component', './forum/components/forum.component', './shared/components/navbar.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, about_component_1, forum_component_1, navbar_component_1;
    var RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (forum_component_1_1) {
                forum_component_1 = forum_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            RootComponent = (function () {
                function RootComponent() {
                    this.title = 'Apollo';
                }
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'im-root',
                        template: "\n        <im-navbar></im-navbar>\n    ",
                        directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
                        { path: '/forum', name: 'Forum', component: forum_component_1.ForumComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RootComponent);
                return RootComponent;
            }());
            exports_1("RootComponent", RootComponent);
        }
    }
});
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
//# sourceMappingURL=root.component.js.map