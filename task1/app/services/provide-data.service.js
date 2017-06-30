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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var user_model_1 = require("../models/user.model");
var ProvideDataService = (function () {
    function ProvideDataService(http) {
        this.http = http;
    }
    ProvideDataService.prototype.getUsers = function () {
        try {
            return this.http.get('http://jsonplaceholder.typicode.com/users')
                .map(function (resp) {
                var usersList = resp.json();
                var users = [];
                for (var index in usersList)
                    users.push(new user_model_1.User(usersList[index]));
                return users;
            });
        }
        catch (e) {
            console.log('Server not found!!!');
        }
    };
    ProvideDataService.prototype.getUser = function (id) {
        try {
            return this.http.get('http://jsonplaceholder.typicode.com/users')
                .map(function (resp) {
                try {
                    return new user_model_1.User(resp.json().filter(function (x) { return x.id === id; })[0]);
                }
                catch (e) {
                    console.log('User not found. Give this user))');
                    return new user_model_1.User(resp.json()[0]);
                }
            });
        }
        catch (e) {
            console.log('Server not found!!!');
        }
    };
    ProvideDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProvideDataService);
    return ProvideDataService;
}());
exports.ProvideDataService = ProvideDataService;
//# sourceMappingURL=provide-data.service.js.map