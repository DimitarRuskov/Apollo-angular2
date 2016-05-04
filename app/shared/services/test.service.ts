import {Injectable} from 'angular2/core';

@Injectable()
export class TestService {
    constructor() { }
    
    sayHello() {
        alert('hello')
    }
}