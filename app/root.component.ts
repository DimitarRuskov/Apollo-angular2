import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent}                  from './components/home/home.component';
import {ListRecipesComponent}           from './components/recipes/list-recipes.component';
import {ListCategoriesComponent}        from './components/categories/list-categories.component';
import {AddCategoryComponent}           from './components/categories/add-category.component';
import {AddRecipeComponent}             from './components/recipes/add-recipe.component';
import {EditProfileComponent}           from './components/profile/edit-profile.component';
import {RegistrationComponent}          from './components/registration/registration.component';
import {LoginComponent}                 from './components/login/login.component';
import {UserService}                    from './services/user.service';

@Component({
    selector: 'im-root',
    templateUrl: 'app/root.component.html',
    styleUrls: ['app/root.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})

@RouteConfig([
    {path:'/home',          name: 'Home',           component: HomeComponent,  useAsDefault: true},
    {path:'/recipes',       name: 'Recipes',        component: ListRecipesComponent},
    {path:'/categories',    name: 'Categories',     component: ListCategoriesComponent},
    {path:'add-category',   name: 'AddCategory',    component: AddCategoryComponent},
    {path:'/add-recipe',    name: 'AddRecipe',      component: AddRecipeComponent},
    {path:'/register',      name: 'Registration',   component: RegistrationComponent},
    {path:'/login',         name: 'Login',          component: LoginComponent},
    {path:'/profile',       name: 'Profile',        component: EditProfileComponent},
    {path: '/**',           redirectTo: ['Home']}
])

export class RootComponent {
    constructor(private user: UserService) { }
    
    public getUsername() {
        let details = this.user.getUserDetails();
        return details.username;
    }
    
    logout(event) {
        this.user.closeSession();
    }
}