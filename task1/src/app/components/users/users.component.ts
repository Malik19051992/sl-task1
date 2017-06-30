import {Component, OnInit} from '@angular/core';
import {ProvideDataService} from '../../services/provide-data.service'
import {Router} from '@angular/router';

import {User} from '../../models/user.model'

@Component({
    selector: 'users',
    templateUrl: 'users.template.html',
    styleUrls: ['users.styles.css'],
    providers: [ProvideDataService]

})
export class UsersComponent implements OnInit {
    users: Array<User> = [];

    constructor(private provideDataService: ProvideDataService, private router: Router) {
    }

    onClickUser(id: number) {
        this.router.navigate(['users', id]);
    }

    ngOnInit() {
        this.provideDataService.getUsers().subscribe((data: Array<User>) => this.users = data);
    }
}