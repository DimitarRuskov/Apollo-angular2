import {Http, Response, Headers, RequestOptionsArgs} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {CategoryModel} from '../models/category.model';

@Injectable()
export class CategoryService {
    public categories:Array<CategoryModel>;
    constructor(private _http:Http) {
        
    }
    
    public listCategories(params) {
        var prms:any = {
            params: {
                orderBy: {
                    updatedAt: -1
                }
            }
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let opts:RequestOptionsArgs = { headers: headers };
        
        return this._http.post('http://localhost:8003/category/list', JSON.stringify(prms), opts)
        .map((res:Response) => res.json())
    }
    
    private handleError(err) {
        console.error(err);
    }
}