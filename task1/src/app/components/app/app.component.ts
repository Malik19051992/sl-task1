import { Component } from '@angular/core';


@Component({
    selector: 'app',
    styleUrls:['app.styles.css'],
    template: `
        <div>
             <nav>
                <a routerLink="/" routerLinkActive="active">Home</a> 
                <a routerLink="/users" routerLinkActive="active">Users</a>
            </nav>
            <router-outlet></router-outlet>
        </div>`
})
export class AppComponent{

}