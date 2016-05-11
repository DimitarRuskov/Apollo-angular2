import {Directive, ElementRef, OnInit, Renderer} from '@angular/core';

@Directive({
    selector: '[apolloSample]'
})

export class SampleDirective implements OnInit {
    private _defaultColor = 'green';
    
    constructor(private _elRef:ElementRef, private _renderer:Renderer) {}
    
    ngOnInit() {
        this._renderer.setElementStyle(this._elRef.nativeElement, 'color', this._defaultColor)
    }
}