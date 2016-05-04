System.register(['angular2/core', '../models/user.model', './http.service', './utils.service'], function(exports_1, context_1) {
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
    var core_1, user_model_1, http_service_1, utils_service_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(_http, _utils) {
                    this._http = _http;
                    this._utils = _utils;
                    this.userDetails = new user_model_1.UserModel();
                    this.userDetails.sessionKey = localStorage.getItem('sessionKey');
                    this.userDetails.username = localStorage.getItem('username');
                    this.userDetails.imageUrl = localStorage.getItem('imageUrl');
                    this.isAuth = this._checkIfAuth();
                }
                UserService.prototype.storeUserDetails = function (data) {
                    this._setSessionKey(data.token);
                    this._setUserDetails(data.userDetails);
                    this.userDetails.username = data.userDetails.username;
                    this.userDetails.id = data.userDetails.id;
                    this.userDetails.sessionKey = localStorage.getItem('sessionKey');
                    this.isAuth = this._checkIfAuth();
                };
                UserService.prototype._setSessionKey = function (sessionKey) {
                    localStorage.setItem('sessionKey', sessionKey);
                };
                UserService.prototype._setUserDetails = function (userDetails) {
                    localStorage.setItem('username', userDetails.username);
                    localStorage.setItem('imageUrl', userDetails.imageUrl);
                };
                UserService.prototype.getSessionKey = function () {
                    return this.userDetails.sessionKey;
                };
                UserService.prototype.closeSession = function () {
                    localStorage.removeItem('sessionKey');
                    this.userDetails = new user_model_1.UserModel();
                    this.isAuth = this._checkIfAuth();
                };
                UserService.prototype._checkIfAuth = function () {
                    return this.userDetails.sessionKey ? true : false;
                };
                UserService.prototype.getProfile = function (params) {
                    params = params || {};
                    params.username = params.username || this.userDetails.username;
                    var url = 'http://localhost:8003/user/' + params.username;
                    return this._http.request('get', url, null, null, this.getSessionKey());
                };
                UserService.prototype.updateProfile = function (params) {
                    var _this = this;
                    var url = 'http://localhost:8003/user/' + params.userId;
                    return this._http.request('put', url, JSON.stringify(params), null, this.getSessionKey())
                        .subscribe(function (data) { return function (data) { return console.log(data); }; }, function (error) { return _this._utils.defaultErrorHandler(error); }, function () { return window.alert('Successfully updated profile!'); });
                };
                UserService.prototype.getUserDetails = function () {
                    return this.userDetails;
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_service_1.HttpService, utils_service_1.UtilsService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map