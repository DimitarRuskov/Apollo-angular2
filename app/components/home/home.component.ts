import {Component} from '@angular/core';
import {SampleDirective} from 'shared/directives/sample.directive';

@Component({
  templateUrl:  'app/components/home/home.component.html',
  styleUrls:    ['app/components/home/home.component.css'],
  directives:   [SampleDirective]
})
export class HomeComponent { }
