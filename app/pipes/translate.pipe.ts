import {Pipe, PipeTransform} from 'angular2/core';
import {Http} from 'angular2/http';
import {UtilsService} from '../services/utils.service';

@Pipe({
    name: 'translate'
})

export class TranslatePipe implements PipeTransform {
    constructor(private utils:UtilsService) {
        
    }
    
    transform(value:string, args:any[]) {
        let lang = localStorage.getItem('lang');
        return this.utils.translations[lang || 'en'][value];
    }
}