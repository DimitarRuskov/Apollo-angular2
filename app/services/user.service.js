System.register(['angular2/core', '../models/user.model'], function(exports_1, context_1) {
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
    var core_1, user_model_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                    this._isAuth = false;
                    this._isAdmin = false;
                }
                UserService.prototype.storeUserDetails = function (userData) {
                    this._user = new user_model_1.UserModel();
                    this._user.username = userData.username;
                    this._user.email = userData.email;
                    this._user.role = userData.role;
                    this._setSessionKey(userData.sessionKey);
                };
                UserService.prototype._setSessionKey = function (sessionKey) {
                    localStorage.setItem('sessionKey', sessionKey);
                    this._isAuth = true;
                };
                UserService.prototype.getSessionKey = function () {
                    return localStorage.getItem('sessionKey');
                };
                UserService.prototype.closeSession = function () {
                    this._isAuth = false;
                };
                UserService.prototype.isAuth = function () {
                    return this._isAuth;
                };
                UserService.prototype.isAdmin = function () {
                    return this.isAdmin;
                };
                UserService.prototype.getUserDetails = function () {
                    return this._user;
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map