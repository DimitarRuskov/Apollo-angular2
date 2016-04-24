System.register(['angular2/http', "angular2/router", 'angular2/core', 'rxjs/add/operator/map', './user.service'], function(exports_1, context_1) {
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
    var http_1, router_1, core_1, user_service_1;
    var AuthService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http, user, _router) {
                    this._http = _http;
                    this.user = user;
                    this._router = _router;
                    this._headers = new http_1.Headers();
                    this._headers.append('Content-Type', 'application/json');
                }
                AuthService.prototype.register = function (params) {
                    var _this = this;
                    delete params.passwordConfirm;
                    var prms = {
                        params: params
                    };
                    this._http.post('http://localhost:8003/user/register', JSON.stringify(prms), { headers: this._headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.onSuccess(data); }, function (err) { return _this.onError(err); }, function () { return window.alert('Registration Complete'); });
                };
                AuthService.prototype.login = function (params) {
                    var _this = this;
                    return this._http.post('http://localhost:8003/user/login', JSON.stringify(params), { headers: this._headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.onSuccess(data); }, function (err) { return _this.onError(err); }, function () { return window.alert('Successfully Logged in!'); });
                };
                AuthService.prototype.getProfile = function (params) {
                    this._headers.set('Authorization', 'Bearer ' + this.user.getSessionKey());
                    return this._http.post('http://localhost:8003/user/getProfile', JSON.stringify({}), { headers: this._headers })
                        .map(function (res) { return res.json(); });
                };
                AuthService.prototype.updateProfile = function (params) {
                    var _this = this;
                    this._headers.set('Authorization', 'Bearer ' + this.user.getSessionKey());
                    return this._http.post('http://localhost:8003/user/updateProfile', JSON.stringify(params), { headers: this._headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return console.log(data); }, function (err) { return _this.onError(err); }, function () { return window.alert('Successfully updated profile!'); });
                };
                AuthService.prototype.onError = function (err) {
                    window.alert('Failed: ' + JSON.parse(err._body).message + ' ' + JSON.parse(err._body).description);
                    console.error('There was an error: ' + JSON.parse(err._body).message);
                };
                AuthService.prototype.onSuccess = function (data) {
                    this.user.storeUserDetails(data);
                    this._router.navigate(['Home']);
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, user_service_1.UserService, router_1.Router])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map