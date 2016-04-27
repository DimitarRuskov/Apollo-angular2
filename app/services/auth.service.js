System.register(["angular2/router", 'angular2/core', 'rxjs/add/operator/map', './user.service', './http.service', './utils.service'], function(exports_1, context_1) {
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
    var router_1, core_1, user_service_1, http_service_1, utils_service_1;
    var AuthService;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http, _utils, _user, _router) {
                    this._http = _http;
                    this._utils = _utils;
                    this._user = _user;
                    this._router = _router;
                }
                AuthService.prototype.register = function (params) {
                    var _this = this;
                    delete params.passwordConfirm;
                    var prms = {
                        params: params
                    };
                    return this._http.request('post', 'http://localhost:8003/user/register', JSON.stringify(prms), null, null)
                        .subscribe(function (data) { return _this.onSuccess(data); }, function (error) { return _this._utils.defaultErrorHandler(error); }, function () { return window.alert('Successfully Registered!'); });
                };
                AuthService.prototype.login = function (params) {
                    var _this = this;
                    return this._http.request('post', 'http://localhost:8003/user/login', JSON.stringify(params), null, null)
                        .subscribe(function (data) { return _this.onSuccess(data); }, function (error) { return _this._utils.defaultErrorHandler(error); }, function () { return window.alert('Successfully Logged in!'); });
                };
                AuthService.prototype.onSuccess = function (data) {
                    this._user.storeUserDetails(data);
                    this._router.navigate(['Home']);
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_service_1.HttpService, utils_service_1.UtilsService, user_service_1.UserService, router_1.Router])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map