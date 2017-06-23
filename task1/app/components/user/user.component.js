"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var provide_data_service_1 = require("../../services/provide-data.service");
var router_1 = require("@angular/router");
var user_model_1 = require("../../models/user.model");
var UserComponent = (function () {
    function UserComponent(provideDataService, route, router) {
        this.provideDataService = provideDataService;
        this.route = route;
        this.router = router;
        this.user = new user_model_1.User({ address: { geo: {} }, company: {} });
        this.isHideAddress = true;
        this.isHideCompany = true;
    }
    UserComponent.prototype.onClickClose = function () {
        this.router.navigate(['users']);
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.provideDataService.getUser(+params['id']).subscribe(function (data) { return _this.user = data; });
        });
    };
    UserComponent.prototype.showHideAddress = function () {
        this.isHideAddress = !this.isHideAddress;
    };
    UserComponent.prototype.showHideCompany = function () {
        this.isHideCompany = !this.isHideCompany;
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        templateUrl: './app/components/user/user.template.html',
        styleUrls: ['./app/components/user/user.styles.css'],
        providers: [provide_data_service_1.ProvideDataService]
    }),
    __metadata("design:paramtypes", [provide_data_service_1.ProvideDataService, router_1.ActivatedRoute, router_1.Router])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map