import {Component}        from '@angular/core';
import {SliderComponent}  from 'shared/components/slider/slider.component';

@Component({
  templateUrl:  'app/components/home/home.component.html',
  styleUrls:    ['app/components/home/home.component.css'],
  directives:   [SliderComponent]
})
export class HomeComponent { }
