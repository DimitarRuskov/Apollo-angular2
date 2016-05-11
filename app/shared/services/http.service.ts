import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    private defaultHeaders:Headers;
    private queryMethods = ['get', 'head', 'delete'];
    private bodyMethods = ['post', 'put', 'patch'];
    private supportedMethods = this.bodyMethods.concat(this.queryMethods);
    
    private methodFuncMap = {
        queryMethods: 'withBody',
        bodyMethods: 'withQuery'
    };
    
    constructor(private _http:Http) {
        this.defaultHeaders = new Headers();
        this.defaultHeaders.append('Content-Type', 'application/json');
    }
    
    public request(method, url, body, options, auth) {
        if (this.supportedMethods.indexOf(method) < 0) {
            throw "Unsupported method";
        }
        
        options = options || {};
        options.headers = options.headers || new Headers();
        
        var defaultHeadersKeys = this.defaultHeaders.keys();
        
        for (var i = 0; i < defaultHeadersKeys.length; i++) {
            if (!options.headers.has(defaultHeadersKeys[i])) {
                options.headers.set(defaultHeadersKeys[i], this.defaultHeaders.get(defaultHeadersKeys[i]));
            }
        }        
        
        if (options.search) {
            options.search = this.buildSearchObject(options.search);
        }

        if (auth) {
            options.headers.set('Authorization', 'Bearer ' + auth);
        }
        
        var funcToInvoke = undefined;
        var invokedFunc = undefined;
        
        for (var prop in this.methodFuncMap) {
            if (this[prop] && Array.isArray(this[prop]) && this[prop].indexOf(method)) {
                funcToInvoke = this.methodFuncMap[prop];
                break;
            }
        } 
        
        if (funcToInvoke === undefined) {
            throw "Error";
        }
        
        if (funcToInvoke === 'withQuery') {
            invokedFunc = this[funcToInvoke](method, url, options);    
        } else if (funcToInvoke === 'withBody') {
            invokedFunc = this[funcToInvoke](method, url, body, options);    
        }
         
        if (invokedFunc === undefined) {
            throw "Error";
        }
                      
        return invokedFunc
            .map((res: Response) => res.json());
    }
    
    buildSearchObject(data) {
        var searchObj = new URLSearchParams();
        
        for (var prop in data) {
            searchObj.set(prop, data[prop]);
        }
        
        return searchObj;
    }
    
    withQuery(method, url, options) {
        return this._http[method](url, options);
    }
    
    withBody(method, url, body, options) {
        return this._http[method](url, body, options);
    }
}