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
        define(["require", "exports", "@angular/core", "@angular/router", "./components/users/users.component", "./components/user/user.component", "./components/home.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var router_1 = require("@angular/router");
    var users_component_1 = require("./components/users/users.component");
    var user_component_1 = require("./components/user/user.component");
    var home_component_1 = require("./components/home.component");
    var routes = [
        { path: '', component: home_component_1.HomeComponent },
        { path: 'users', component: users_component_1.UsersComponent },
        { path: 'users', component: users_component_1.UsersComponent,
            children: [{ path: ':id', component: user_component_1.UserComponent }]
        },
    ];
    var AppRoutingModule = (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule]
            })
        ], AppRoutingModule);
        return AppRoutingModule;
    }());
    exports.AppRoutingModule = AppRoutingModule;
});
//# sourceMappingURL=app-route.module.js.map