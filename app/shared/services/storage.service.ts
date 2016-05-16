import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageService {
    constructor() { }
    
    public set(key: string, value: any, local?: boolean) {
        value = (typeof value !== 'string' ? JSON.stringify(value) : value);
        
        if (local) {
            localStorage.setItem(key, value);
        } else {
            sessionStorage.setItem(key, value);
        }

        return this.get(key, local);
    }

    public get(key: string, local?: boolean) {
        let result = (local ? localStorage.getItem(key) : sessionStorage.getItem(key));
        result = (result ? JSON.parse(result) : null);
        return result;
    }

    public remove(key: string, local?: boolean) {
        let value = this.get(key, local);
        
        if (!value) {
            return undefined;
        }
        
        if (local) {
            localStorage.removeItem(key);
        } else {
            sessionStorage.removeItem(key);
        }
        
        return value;
    }
}
