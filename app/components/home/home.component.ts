import {Component} from 'angular2/core';
import {SampleDirective} from '../../directives/sample.directive';
import {TestService} from  'sharedServices/test.service';

@Component({
  templateUrl:  'app/components/home/home.component.html',
  styleUrls:    ['app/components/home/home.component.css'],
  directives:   [SampleDirective],
  providers:    [TestService]
})
export class HomeComponent { 
  constructor(private testService:TestService) {
    this.testService.sayHello();
  }
}