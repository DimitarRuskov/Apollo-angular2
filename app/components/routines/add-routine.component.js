System.register(['angular2/core', 'angular2/router', '../../services/routine.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, routine_service_1;
    var AddRoutineComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routine_service_1_1) {
                routine_service_1 = routine_service_1_1;
            }],
        execute: function() {
            AddRoutineComponent = (function () {
                function AddRoutineComponent(element, _routineService, _routeParams) {
                    this.element = element;
                    this._routineService = _routineService;
                    this._routeParams = _routeParams;
                    this._selectedImage = null;
                }
                AddRoutineComponent.prototype.changeListner = function (event) {
                    var reader = new FileReader();
                    var image = this.element.nativeElement.querySelector('.image');
                    reader.onload = function (e) {
                        var src = e.target.result;
                        this._selectedImage = src;
                        image.src = src;
                    }.bind(this);
                    reader.readAsDataURL(event.target.files[0]);
                };
                AddRoutineComponent.prototype.ngOnInit = function () {
                    this._categoryId = this._routeParams.get('categoryId');
                };
                AddRoutineComponent.prototype.onSubmit = function (values) {
                    values.categoryId = this._categoryId;
                    values.image = this._selectedImage;
                    this._routineService.addRoutine(values);
                };
                AddRoutineComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/routines/add-routine.component.html',
                        styleUrls: ['app/components/routines/add-routine.component.css'],
                        providers: [routine_service_1.RoutineService]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, routine_service_1.RoutineService, router_1.RouteParams])
                ], AddRoutineComponent);
                return AddRoutineComponent;
            }());
            exports_1("AddRoutineComponent", AddRoutineComponent);
        }
    }
});
//# sourceMappingURL=add-routine.component.js.map