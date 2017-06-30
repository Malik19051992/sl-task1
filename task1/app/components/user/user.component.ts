import {Component, OnInit, Input} from '@angular/core';
import {ProvideDataService} from '../../services/provide-data.service'
import {ActivatedRoute, Router} from '@angular/router';

import {User} from '../../models/user.model'

@Component({
    selector: 'user',
    templateUrl: './user.template.html',
    styleUrls: ['./user.styles.css'],
    providers: [ProvideDataService]

})
export class UserComponent implements OnInit {

    private sub: any;
    user: User = new User({address: {geo: {}}, company: {}});
    isHideAddress: boolean = true;
    isHideCompany: boolean = true;

    constructor(private provideDataService: ProvideDataService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    onClickClose() {
        this.router.navigate(['users']);
    }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.provideDataService.getUser(+params['id']).subscribe((data:User) => this.user = data);
        });
    }

    showHideAddress() {
        this.isHideAddress = !this.isHideAddress;

    }
    showHideCompany() {
        this.isHideCompany = !this.isHideCompany;

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}