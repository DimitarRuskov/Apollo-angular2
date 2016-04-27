System.register(["angular2/router", 'angular2/core', './user.service', './http.service'], function(exports_1, context_1) {
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
    var router_1, core_1, user_service_1, http_service_1;
    var CategoryService;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            CategoryService = (function () {
                function CategoryService(_http, _user, _router) {
                    this._http = _http;
                    this._user = _user;
                    this._router = _router;
                }
                CategoryService.prototype.listCategories = function (params) {
                    var options = {
                        search: {
                            orderBy: {
                                updatedAt: -1
                            }
                        }
                    };
                    return this._http.request('get', 'http://localhost:8003/category/list', null, options, null);
                };
                CategoryService.prototype.addCategory = function (params) {
                    return this._http.request('post', 'http://localhost:8003/category/add', JSON.stringify(params), null, this._user.getSessionKey());
                };
                CategoryService.prototype.onSuccess = function (data) {
                    this._router.navigate(['Categories']);
                };
                CategoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_service_1.HttpService, user_service_1.UserService, router_1.Router])
                ], CategoryService);
                return CategoryService;
            }());
            exports_1("CategoryService", CategoryService);
        }
    }
});
//# sourceMappingURL=category.service.js.map