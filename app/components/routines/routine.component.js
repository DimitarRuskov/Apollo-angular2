System.register(['angular2/core', '../../models/routine.model', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, routine_model_1, router_1;
    var RoutineComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (routine_model_1_1) {
                routine_model_1 = routine_model_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RoutineComponent = (function () {
                function RoutineComponent(_router) {
                    this._router = _router;
                }
                RoutineComponent.prototype.listRoutines = function (routineId) {
                    this._router.navigate(['Exercises', { routineId: routineId }]);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', routine_model_1.RoutineModel)
                ], RoutineComponent.prototype, "routine", void 0);
                RoutineComponent = __decorate([
                    core_1.Component({
                        selector: 'apollo-routine',
                        templateUrl: 'app/components/routines/routine.component.html',
                        styleUrls: ['app/components/routines/routine.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RoutineComponent);
                return RoutineComponent;
            }());
            exports_1("RoutineComponent", RoutineComponent);
        }
    }
});
//# sourceMappingURL=routine.component.js.map