System.register(['angular2/router', 'angular2/core', 'rxjs/add/operator/map', '../../node_modules/angular2-notifications/components'], function(exports_1, context_1) {
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
    var router_1, core_1, components_1;
    var UtilsService;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (components_1_1) {
                components_1 = components_1_1;
            }],
        execute: function() {
            UtilsService = (function () {
                function UtilsService(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                UtilsService.prototype.success = function (message, title) {
                    this._service.success(title || 'Success', message);
                };
                UtilsService.prototype.error = function (message, title) {
                    this._service.error(title || 'Failed', message);
                };
                UtilsService.prototype.alert = function (message, title) {
                    this._service.alert(title || 'Alert', message);
                };
                UtilsService.prototype.info = function (message, title) {
                    this._service.info(title || 'Info', message);
                };
                UtilsService.prototype.defaultErrorHandler = function (error) {
                    this.error(JSON.parse(error._body).description);
                    console.error('There was an error: ' + JSON.parse(error._body).message);
                };
                UtilsService.prototype.defaultSuccessHandler = function (data) {
                };
                UtilsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router, components_1.NotificationsService])
                ], UtilsService);
                return UtilsService;
            }());
            exports_1("UtilsService", UtilsService);
        }
    }
});
//# sourceMappingURL=utils.service.js.map