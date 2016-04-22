System.register(['angular2/core', 'angular2/router', './routine.component', '../../services/routine.service', '../../services/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, routine_component_1, routine_service_1, user_service_1;
    var ListRoutinesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routine_component_1_1) {
                routine_component_1 = routine_component_1_1;
            },
            function (routine_service_1_1) {
                routine_service_1 = routine_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            ListRoutinesComponent = (function () {
                function ListRoutinesComponent(_routineService, _router, _routeParams, user) {
                    this._routineService = _routineService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = user;
                    this.routines = [];
                }
                ListRoutinesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._categoryId = this._routeParams.get('categoryId');
                    this._routineService.listRoutines({ categoryId: this._categoryId })
                        .subscribe(function (data) { return _this.routines = data.routines; }, function (err) { return console.log(err); }, function () { return console.log(_this.routines); });
                };
                ListRoutinesComponent.prototype.addRoutine = function () {
                    this._router.navigate(['AddRoutine', { categoryId: this._categoryId }]);
                };
                ListRoutinesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/routines/list-routines.component.html',
                        styleUrls: ['app/components/routines/list-routines.component.css'],
                        directives: [routine_component_1.RoutineComponent],
                        providers: [routine_service_1.RoutineService, user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [routine_service_1.RoutineService, router_1.Router, router_1.RouteParams, user_service_1.UserService])
                ], ListRoutinesComponent);
                return ListRoutinesComponent;
            }());
            exports_1("ListRoutinesComponent", ListRoutinesComponent);
        }
    }
});
//# sourceMappingURL=list-routines.component.js.map