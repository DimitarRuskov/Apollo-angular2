import {Component, ElementRef, OnInit} from '@angular/core';

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
    
    constructor(private el: ElementRef) {}
    
    ngOnInit() {
        this.initializeSlide()
    }
    
    private initializeSlide() {
        this.ul = jQuery(this.el.nativeElement).find('.slider ul');
        this.slideCount = this.ul.children().length;
        this.slideWidth = 100.0 / this.slideCount;
        this.currentIndex = 0;
        let context = this;
        
        this.ul.find('li').each((index: any) => {
            let leftPercent = (context.slideWidth * index) + '%';
            jQuery(this).css('left', leftPercent);
            jQuery(this).css('width', (100 / context.slideCount) + '%');
        });
        
        jQuery(this.el.nativeElement).find('.slider .prev').click(() => {
            console.log('prev button clicked');
            context.slide(this.currentIndex - 1);
        });
        
        jQuery(this.el.nativeElement).find('.slider .next').click(() => {
            console.log('next button clicked');
            context.slide(this.currentIndex + 1);
        });
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
