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
    var ProfileService;
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
            ProfileService = (function () {
                function ProfileService(_http, _userService, _router) {
                    this._http = _http;
                    this._userService = _userService;
                    this._router = _router;
                    this._headers = new http_1.Headers();
                    this._headers.append('Content-Type', 'application/json');
                }
                ProfileService.prototype.updateProfile = function (params) {
                    var _this = this;
                    return this._http.post('http://localhost:8003/user/update ', JSON.stringify(params), { headers: this._headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.onSuccess(data); }, function (err) { return _this.onError(err); }, function () { return window.alert('Successfully Edited Profile!'); });
                };
                ProfileService.prototype.onError = function (err) {
                    window.alert('Failed: ' + JSON.parse(err._body).message + ' ' + JSON.parse(err._body).description);
                    console.error('There was an error: ' + JSON.parse(err._body).message);
                };
                ProfileService.prototype.onSuccess = function (data) {
                    alert('Success: ' + JSON.parse(data));
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, user_service_1.UserService, router_1.Router])
                ], ProfileService);
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});
//# sourceMappingURL=profile.service.js.map