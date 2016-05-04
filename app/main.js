System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './root.component', '../node_modules/angular2-notifications/components'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, http_1, root_component_1, components_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (root_component_1_1) {
                root_component_1 = root_component_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(root_component_1.RootComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, components_1.NotificationsService]);
        }
    }
});
//# sourceMappingURL=main.js.map