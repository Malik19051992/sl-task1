let UserComponent = require('./user.component');

describe("UserComponent unit test", function () {

    let userComponent;
    beforeEach(function () {
        userComponent = {};
        userComponent.isHideAddress = true;
        userComponent.isHideCompany = true;
    });
    afterEach(function () {
        userComponent = {};
    });

    describe("show functions unit test", function () {
        it('showHideAddress test', function () {
            expect(UserComponent.prototype.showHideAddress.call(userComponent)).toEqual(userComponent.isHideAddress);
        });

        it('showHideAddress test', function () {
            expect(UserComponent.prototype.showHideCompany.call(userComponent)).toEqual(userComponent.isHideCompany);
        });
    });
});
