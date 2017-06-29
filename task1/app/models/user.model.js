(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var User = (function () {
        function User(user) {
            this.id = user.id;
            this.name = user.name;
            this.userName = user.username;
            this.email = user.email;
            this.address = new Address(user.address);
            this.phone = user.phone;
            this.website = user.website;
            this.company = new Company(user.company.name, user.company.catchPhrase, user.company.bs);
        }
        return User;
    }());
    exports.User = User;
    var Address = (function () {
        function Address(address) {
            this.street = address.street;
            this.suite = address.suite;
            this.city = address.city;
            this.zipCode = address.zipcode;
            this.geo = new Geolocation(address.geo.lat, address.geo.lng);
        }
        Address.prototype.toString = function () {
            return this.city + ", " + this.street;
        };
        return Address;
    }());
    var Geolocation = (function () {
        function Geolocation(lat, lng) {
            this.lat = lat;
            this.lng = lng;
        }
        return Geolocation;
    }());
    var Company = (function () {
        function Company(name, catchPhrase, bs) {
            this.name = name;
            this.catchPhrase = catchPhrase;
            this.bs = bs;
        }
        Company.prototype.toString = function () {
            return this.name;
        };
        return Company;
    }());
});
//# sourceMappingURL=user.model.js.map