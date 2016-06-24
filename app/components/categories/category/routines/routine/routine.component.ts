import {Component, OnInit, ElementRef} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

import {PaginationComponent} from 'shared/components/pagination/pagination.component';

import {UtilsService} from 'shared/services/utils.service';

import {RoutineService} from './routine.service';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    templateUrl: 'routine.component.html',
    styleUrls: ['routine.component.css'],
    directives: [PaginationComponent],
    providers: [RoutineService, UtilsService]
})

export class RoutineComponent implements OnInit {
    private _routineId: String;
    private _categoryId: String;
    private exercises: Array<any>;
    private comments: Array<any>;
    private commentsCount: number;
    private page: number;
    private exercisesCount: number;

    constructor(private element: ElementRef, private _routineService: RoutineService,
    private _routeParams: RouteParams, private _utilsService: UtilsService) { }
    
    ngOnInit() {
        jQuery('ul.tabs').tabs();
        jQuery('.modal-trigger').leanModal();
        this._routineId = this._routeParams.get('routine');
        this._categoryId = this._routeParams.get('category');
        this._routineService.getDetails({
            category: this._categoryId,
            routine: this._routineId
        })
        .subscribe(
            (data: any) => this.buildDataList(data),
            (err: any) => console.log(err),
            () => console.log('details fetched')
        );
    }
    
    buildDataList(data: any) {
        this.exercises = data.routine.exercises;
        this.comments = data.routine.comments;
        this.commentsCount = data.routine.commentsCount;
        this.exercisesCount = data.routine.exercisesCount;
    }
    
    addComment() {
        let inputElement = this.element.nativeElement.querySelector('#content');
        
        if (!inputElement.value.length) {
            this._utilsService.alert('Please, do not comment without content!')
            return;
        }
        
        let values = {
            category: this._categoryId,
            routine: this._routineId,
            content: inputElement.value
        }
        
        this._routineService.addComment(values)
        .subscribe(
            (data: any) => this.reloadComments(data),
            (err: any) => this._utilsService.defaultErrorHandler(err),
            () => this._utilsService.success('Successfully commented the routine!')
        );
    }
    
    fetchComments() {
        let options = {
            category: this._categoryId,
            routine: this._routineId,
            page: this.page - 1
        };
        
        this._routineService.listComments(options)
        .subscribe(
            (data: any) => this.comments = data.comments,
            (err: any) => this._utilsService.defaultErrorHandler(err)
        );
    }
    
    reloadComments(data: any) {
        this.element.nativeElement.querySelector('#content').value = '';
        this.fetchComments();
    }
    
     onPageChanged(event: any) {
        this.page = event.page;
        this.fetchComments();
    }
}
