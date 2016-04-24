import {Http, Response, Headers} from 'angular2/http';
import {Router} from "angular2/router";
import {Injectable} from 'angular2/core';

import {CategoryModel} from '../models/category.model';
import {UserService} from './user.service';

@Injectable()
export class CategoryService {
    public categories:Array<CategoryModel>;
    private _headers:Headers;
    constructor(private _http:Http, private _user:UserService, private _router:Router) {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }
    
    public listCategories(params) {
        var prms:any = {
            orderBy: {
                updatedAt: -1
            }
        }
        return this._http.post('http://localhost:8003/category/list', JSON.stringify(prms), {headers: this._headers})
        .map((res:Response) => res.json())
    }
    
    public addCategory(params) {
        this._headers.set('Authorization', 'Bearer ' + this._user.getSessionKey());
        return this._http.post('http://localhost:8003/category/add', JSON.stringify(params), {headers: this._headers})
        .map((res: Response) => res.json())
    }
    
    onSuccess(data) {
        this._router.navigate(['Categories']);
    }
    
    onError(err) {
        window.alert('Failed: ' + JSON.parse(err._body).message + ' ' + JSON.parse(err._body).description);
        console.error(err);
    }
}