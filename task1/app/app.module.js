var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/platform-browser", "./components/app/app.component", "./app-route.module", "@angular/http", "./components/users/users.component", "./components/home.component", "./components/user/user.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var platform_browser_1 = require("@angular/platform-browser");
    var app_component_1 = require("./components/app/app.component");
    var app_route_module_1 = require("./app-route.module");
    var http_1 = require("@angular/http");
    var users_component_1 = require("./components/users/users.component");
    var home_component_1 = require("./components/home.component");
    var user_component_1 = require("./components/user/user.component");
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            core_1.NgModule({
                imports: [platform_browser_1.BrowserModule, app_route_module_1.AppRoutingModule, http_1.HttpModule],
                declarations: [app_component_1.AppComponent, users_component_1.UsersComponent, home_component_1.HomeComponent, user_component_1.UserComponent],
                bootstrap: [app_component_1.AppComponent]
            })
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map