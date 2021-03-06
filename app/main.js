System.register(["angular2/platform/browser", "angular2/router", "./AppComponent", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, AppComponent_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AppComponent_1_1) {
                AppComponent_1 = AppComponent_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(AppComponent_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map