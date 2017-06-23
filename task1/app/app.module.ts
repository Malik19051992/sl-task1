import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './components/app.component';
import {AppRoutingModule} from './app-route.module';
import { HttpModule }   from '@angular/http';

import {UsersComponent} from './components/users/users.component';
import {HomeComponent} from './components/home.component';
import {UserComponent } from './components/user/user.component';


@NgModule({
    imports: [BrowserModule, AppRoutingModule,HttpModule],
    declarations: [AppComponent, UsersComponent, HomeComponent,UserComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}