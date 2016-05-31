import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    selector:           'apollo-pagination',
    templateUrl:        'app/shared/components/pagination/pagination.component.html',
    styleUrls:          ['app/shared/components/pagination/pagination.component.css']
})

export class PaginationComponent implements OnInit {
    @Input() itemCount: number;
    @Output() pageChange = new EventEmitter();
    
    private pages: Array<any>;
    private currentPage: number = 1;
    private pageCount: number;
    
    ngOnInit() {
        this.pageCount = Math.ceil(this.itemCount / 10);
        this.pages = Array.apply(null, {length: this.pageCount}).map((x: number, i: number) => i + 1);
    }
    
    onPageClick(page: number) {
        if (page !== this.currentPage && page >= 1 && page <= this.pageCount) {
            this.currentPage = page;
            this.pageChange.emit({
                page: this.currentPage
            });
        }
    }
}
