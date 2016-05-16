import {Component, ElementRef, OnInit, Renderer} from '@angular/core';

declare var jQuery: any;

@Component({
    selector:           'apollo-slider',
    templateUrl:        'app/shared/components/slider/slider.component.html',
    styleUrls:          ['app/shared/components/slider/slider.component.css'],
    directives:         []
})

export class SliderComponent implements OnInit {
    private ul: any;
    private slideCount: any;
    private slideWidth: any;
    private currentIndex: any;
    
    constructor(private el: ElementRef, private renderer: Renderer) {

    }
    
    ngOnInit() {
        this.initializeSlide();
    }
    
    private initializeSlide() {
        this.ul = jQuery(this.el.nativeElement).find('.slider ul');
        this.slideCount = this.ul.children().length;
        this.slideWidth = 100.0 / this.slideCount;
        this.currentIndex = 0;
        let context = this;
        let index = 0;
        
        for (let el of this.el.nativeElement.getElementsByTagName('li')) {
            this.renderer.setElementStyle(el, 'left', (context.slideWidth * index) + '%');
            this.renderer.setElementStyle(el, 'width', (100 / context.slideCount) + '%');
            index++;
        }
    }
    
    private slide(newIndex: any) {
        if (newIndex < 0 || newIndex >= this.slideCount) {
            return;
        }
        
        let marginLeft = (newIndex * (-100)) + '%';
        this.ul.animate({'margin-left': marginLeft}, 400, () => {
            this.currentIndex = newIndex
            console.log('current index', this.currentIndex);
        });
    }
}
