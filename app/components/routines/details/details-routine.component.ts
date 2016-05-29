import {Component, OnInit, ElementRef} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';

import {RoutineModel} from './../routine.model';
import {RoutineService} from './../routine.service';

import {UtilsService} from 'shared/services/utils.service';

declare var jQuery: any;

@Component({
    templateUrl:        'app/components/routines/details/details-routine.component.html',
    styleUrls:          ['app/components/routines/details/details-routine.component.css'],
    providers:          [RoutineService, UtilsService]
})

export class DetailsRoutineComponent implements OnInit {
    private _routineId: String;
    private exercises: Array<any>;
    private comments: Array<any>;
    private commentPages: Array<any>;
    private currentPage: number = 1;
    private pageCount: number;
    constructor(private element: ElementRef, private _routineService: RoutineService, private _routeParams: RouteParams, private _utilsService: UtilsService) {
        
    }
    
    ngOnInit() {
        jQuery('ul.tabs').tabs();
        jQuery('.modal-trigger').leanModal();
        this._routineId = this._routeParams.get('routineId');
        this._routineService.getDetails({routineId: this._routineId})
        .subscribe(
            (data: any) => this.buildDataList(data),
            (err: any) => console.log(err),
            () => console.log('detailes fetched')
        );
    }
    
    buildDataList(data: any) {
        this.exercises = data.exercises;
        this.comments = data.comments;
        this.pageCount = Math.ceil(data.commentsCount / 10);
        this.commentPages = Array.apply(null, {length: this.pageCount}).map((x: number, i: number) => i + 1);
    }
    
    addComment() {
        let inputElement = this.element.nativeElement.querySelector('#content');
        if (!inputElement.value.length) {
            this._utilsService.alert('Please, do not comment without content!')
            return;
        }
        let values = {
            routineId: this._routineId,
            content: this.element.nativeElement.querySelector('#content').value
        }
        this._routineService.addComment(values)
        .subscribe(
            (data: any) => this.reloadComments(data),
            (err: any) => this._utilsService.defaultErrorHandler(err),
            () => this._utilsService.success('Successfully commented the routine!')
        );
    }
    
    onPageClick(page: number) {
        if (page !== this.currentPage && page >= 1 && page <= this.pageCount) {
            this.currentPage = page;
            this.fetchComments();
        }
    }
    
    fetchComments() {
        let options = {
            routineId: this._routineId,
            page: this.currentPage
        }
        this._routineService.listComments(options)
        .subscribe(
            (data: any) => this.comments = data.comments,
            (err: any) => this._utilsService.defaultErrorHandler(err)
        );
    }
    
    reloadComments(data: any) {
        this.element.nativeElement.querySelector('#content').value = '';
        this.currentPage = 1;
        this.fetchComments();
    }
}
