import {Component, OnInit} from '@angular/core';
import {ProvideDataService} from '../../services/provide-data.service'
import { Router} from '@angular/router';

import {User} from '../../models/user.model'

@Component({
    selector: 'users',
    templateUrl: './app/components/users/users.template.html',
    styleUrls:['./app/components/users/users.styles.css'],
    providers: [ProvideDataService]

})
export class UsersComponent implements OnInit {
    users: Array<User> = [];

    constructor(private provideDataService: ProvideDataService, private router: Router) {
    }

   onClickUser(id) {
       this.router.navigate(['users',id]);
    }

    ngOnInit() {
        this.provideDataService.getUsers().subscribe((data) => this.users = data);
    }
}