System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent() {
                }
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'im-navbar',
                        template: "\n        <ul id=\"menu\">\n            <li><a href=\"#\">Home</a></li>\n            <li>\n                <a href=\"#\">About \uFFEC</a>\n                <ul class=\"hidden\">\n                    <li><a href=\"#\">Who We Are</a></li>\n                    <li><a href=\"#\">What We Do</a></li>\n                </ul>\n            </li>\n            <li>\n                <a href=\"#\">Help \uFFEC</a>\n                <ul class=\"hidden\">\n                    <li><a href=\"#\">Help 1</a></li>\n                    <li><a href=\"#\">Help 2</a></li>\n                    <li><a href=\"#\">Help 3</a></li>\n                </ul>\n            </li>\n        </ul>\n    ",
                        styles: ["\n        ul {\n            list-style-type:none;\n            margin:0;\n            padding:0;\n            position: absolute;\n        }\n\n        li {\n            display:inline-block;\n            float: left;\n            margin-right: 1px;\n        }\n        \n        li a {\n            display:block;\n            min-width:140px;\n            height: 50px;\n            text-align: center;\n            line-height: 50px;\n            font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            color: #fff;\n            background: #2f3036;\n            text-decoration: none;\n        }\n\n        li:hover a {\n            background: #19c589;\n        }\n\n        li:hover ul a {\n            background: #f3f3f3;\n            color: #2f3036;\n            height: 40px;\n            line-height: 40px;\n        }\n\n        li:hover ul a:hover {\n            background: #19c589;\n            color: #fff;\n        }\n        \n        li ul {\n            display: none;\n        }\n\n        li ul li {\n            display: block;\n            float: none;\n        }\n\n        li ul li a {\n            width: auto;\n            min-width: 100px;\n            padding: 0 20px;\n        }\n\n        ul li a:hover + .hidden, .hidden:hover {\n            display: block;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map