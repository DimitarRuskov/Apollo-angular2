System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var HttpService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            HttpService = (function () {
                function HttpService(_http) {
                    this._http = _http;
                    this.queryMethods = ['get', 'head', 'delete'];
                    this.bodyMethods = ['post', 'put', 'patch'];
                    this.supportedMethods = this.bodyMethods.concat(this.queryMethods);
                    this.methodFuncMap = {
                        queryMethods: 'withBody',
                        bodyMethods: 'withQuery'
                    };
                    this.defaultHeaders = new http_1.Headers();
                    this.defaultHeaders.append('Content-Type', 'application/json');
                }
                HttpService.prototype.request = function (method, url, body, options, auth) {
                    if (this.supportedMethods.indexOf(method) < 0) {
                        throw "Unsupported method";
                    }
                    options = options || {};
                    options.headers = options.headers || new http_1.Headers();
                    var defaultHeadersKeys = this.defaultHeaders.keys();
                    for (var i = 0; i < defaultHeadersKeys.length; i++) {
                        if (!options.headers.has(defaultHeadersKeys[i])) {
                            options.headers.set(defaultHeadersKeys[i], this.defaultHeaders.get(defaultHeadersKeys[i]));
                        }
                    }
                    if (auth) {
                        options.headers.set('Authorization', 'Bearer ' + auth);
                    }
                    var funcToInvoke = undefined;
                    var invokedFunc = undefined;
                    for (var prop in this.methodFuncMap) {
                        if (this[prop] && Array.isArray(this[prop]) && this[prop].indexOf(method)) {
                            funcToInvoke = this.methodFuncMap[prop];
                            break;
                        }
                    }
                    if (funcToInvoke === undefined) {
                        throw "Error";
                    }
                    if (funcToInvoke === 'withQuery') {
                        invokedFunc = this[funcToInvoke](method, url, options);
                    }
                    else if (funcToInvoke === 'withBody') {
                        invokedFunc = this[funcToInvoke](method, url, body, options);
                    }
                    if (invokedFunc === undefined) {
                        throw "Error";
                    }
                    return invokedFunc
                        .map(function (res) { return res.json(); });
                };
                HttpService.prototype.withQuery = function (method, url, options) {
                    return this._http[method](url, options);
                };
                HttpService.prototype.withBody = function (method, url, body, options) {
                    return this._http[method](url, body, options);
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpService);
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});
//# sourceMappingURL=http.service.js.map