import {Http, Response, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {CategoryModel} from '../models/category.model';

@Injectable()
export class CategoryService {
    public categories:Array<CategoryModel>;
    private _headers:Headers;
    constructor(private _http:Http) {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }
    
    public listCategories(params) {
        var prms:any = {
            params: {
                orderBy: {
                    updatedAt: -1
                }
            }
        }
        return this._http.post('http://localhost:8003/category/list', JSON.stringify(prms), {headers: this._headers})
        .map((res:Response) => res.json())
    }
    
    public addCategory(params) {
        var prms:any = { }
        prms.params = params;
        return this._http.post('http://localhost:8003/category/add', JSON.stringify(prms), {headers: this._headers})
        .map((res:Response) => res.json())
    }
    
    private handleError(err) {
        console.error(err);
    }
}