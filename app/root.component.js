System.register(['angular2/core', 'angular2/router', './components/home/home.component', './components/categories/list-categories.component', './components/categories/add-category.component', './components/routines/list-routines.component', './components/routines/add-routine.component', './components/profile/edit-profile.component', './components/registration/registration.component', './components/login/login.component', './services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, list_categories_component_1, add_category_component_1, list_routines_component_1, add_routine_component_1, edit_profile_component_1, registration_component_1, login_component_1, user_service_1;
    var RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (list_categories_component_1_1) {
                list_categories_component_1 = list_categories_component_1_1;
            },
            function (add_category_component_1_1) {
                add_category_component_1 = add_category_component_1_1;
            },
            function (list_routines_component_1_1) {
                list_routines_component_1 = list_routines_component_1_1;
            },
            function (add_routine_component_1_1) {
                add_routine_component_1 = add_routine_component_1_1;
            },
            function (edit_profile_component_1_1) {
                edit_profile_component_1 = edit_profile_component_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            RootComponent = (function () {
                function RootComponent(user) {
                    this.user = user;
                }
                RootComponent.prototype.getUsername = function () {
                    var details = this.user.getUserDetails();
                    return details.username;
                };
                RootComponent.prototype.logout = function (event) {
                    this.user.closeSession();
                };
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'apollo-root',
                        templateUrl: 'app/root.component.html',
                        styleUrls: ['app/root.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/categories', name: 'Categories', component: list_categories_component_1.ListCategoriesComponent },
                        { path: 'add-category', name: 'AddCategory', component: add_category_component_1.AddCategoryComponent },
                        { path: '/routines/:categoryId', name: 'Routines', component: list_routines_component_1.ListRoutinesComponent },
                        { path: '/add-routine', name: 'AddRoutine', component: add_routine_component_1.AddRoutineComponent },
                        { path: '/register', name: 'Registration', component: registration_component_1.RegistrationComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/profile', name: 'Profile', component: edit_profile_component_1.EditProfileComponent },
                        { path: '/**', redirectTo: ['Home'] }
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], RootComponent);
                return RootComponent;
            }());
            exports_1("RootComponent", RootComponent);
        }
    }
});
//# sourceMappingURL=root.component.js.map