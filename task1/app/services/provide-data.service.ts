import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user.model'


@Injectable()
export class ProvideDataService {

    constructor(private http: Http) {
    }

    getUsers() {
        try {
            return this.http.get('http://jsonplaceholder.typicode.com/users')
                .map((resp: Response) => {
                    let usersList = resp.json();
                    let users: User[] = [];
                    for (let index in usersList)
                        users.push(new User(usersList[index]));
                    return users;
                });
        }
        catch (e) {
            console.log('Server not found!!!')
        }
    }

    getUser(id) {
        try {
            return this.http.get('http://jsonplaceholder.typicode.com/users')
                .map((resp: Response) => {
                    try {
                        return new User(resp.json().filter((x) => x.id === id)[0]);
                    } catch (e) {
                        console.log('User not found. Give this user))')
                        return new User(resp.json()[0]);
                    }
                });
        }
        catch (e) {
            console.log('Server not found!!!')
        }
    }

}
