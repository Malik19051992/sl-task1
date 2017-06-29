(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./user.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var user_component_1 = require("./user.component");
    describe('UserComponent unit test', function () {
        var userComponent;
        beforeEach(function () {
            userComponent = {};
            userComponent.isHideAddress = true;
            userComponent.isHideCompany = true;
        });
        afterEach(function () {
            userComponent = {};
        });
        describe('show functions unit test', function () {
            it('showHideAddress test', function () {
                expect(user_component_1.UserComponent.prototype.showHideAddress.call(userComponent)).toEqual(userComponent.isHideAddress);
            });
            it('showHideAddress test', function () {
                expect(user_component_1.UserComponent.prototype.showHideCompany.call(userComponent)).toEqual(userComponent.isHideCompany);
            });
        });
    });
});
//# sourceMappingURL=user.component.spec.js.map