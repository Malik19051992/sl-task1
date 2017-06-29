var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../../services/provide-data.service", "@angular/router"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var provide_data_service_1 = require("../../services/provide-data.service");
    var router_1 = require("@angular/router");
    var UsersComponent = (function () {
        function UsersComponent(provideDataService, router) {
            this.provideDataService = provideDataService;
            this.router = router;
            this.users = [];
        }
        UsersComponent.prototype.onClickUser = function (id) {
            this.router.navigate(['users', id]);
        };
        UsersComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.provideDataService.getUsers().subscribe(function (data) { return _this.users = data; });
        };
        UsersComponent = __decorate([
            core_1.Component({
                selector: 'users',
                templateUrl: './app/components/users/users.template.html',
                styleUrls: ['./app/components/users/users.styles.css'],
                providers: [provide_data_service_1.ProvideDataService]
            }),
            __metadata("design:paramtypes", [provide_data_service_1.ProvideDataService, router_1.Router])
        ], UsersComponent);
        return UsersComponent;
    }());
    exports.UsersComponent = UsersComponent;
});
//# sourceMappingURL=users.component.js.map