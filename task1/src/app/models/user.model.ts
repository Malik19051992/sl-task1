export class User {
    id: number;
    name: string;
    userName: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;

    constructor(user: any) {
        this.id = user.id;
        this.name = user.name;
        this.userName = user.username;
        this.email = user.email;
        this.address = new Address(user.address);
        this.phone = user.phone;
        this.website = user.website;
        this.company = new Company(user.company.name, user.company.catchPhrase, user.company.bs)
    }
}

class Address {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
    geo: Geolocation;

    constructor(address:any) {
        this.street = address.street;
        this.suite = address.suite;
        this.city = address.city;
        this.zipCode = address.zipcode;
        this.geo = new Geolocation(address.geo.lat, address.geo.lng)
    }

    toString() {
        return `${this.city}, ${this.street}`
    }
}

class Geolocation {
    constructor(public lat: string,
                public lng: string) {
    }
}

class Company {
    constructor(public name: string,
                public catchPhrase: string,
                public bs: string,) {
    }

    toString() {
        return this.name;
    }
}
