import {Component} from '@angular/core';
import {SampleDirective} from 'shared/directives/sample.directive';
import {MaterializeDirective} from 'angular2-materialize';

@Component({
  templateUrl:  'app/components/home/home.component.html',
  styleUrls:    ['app/components/home/home.component.css'],
  directives:   [SampleDirective, MaterializeDirective]
})
export class HomeComponent { }
