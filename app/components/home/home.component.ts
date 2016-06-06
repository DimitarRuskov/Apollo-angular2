import {Component} from '@angular/core';
import {SliderComponent} from 'shared/components/slider/slider.component';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [SliderComponent]
})
export class HomeComponent { }
