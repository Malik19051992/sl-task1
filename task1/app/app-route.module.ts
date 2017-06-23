import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {HomeComponent} from './components/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users', component: UsersComponent,
        children: [{path: ':id', component: UserComponent}]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
