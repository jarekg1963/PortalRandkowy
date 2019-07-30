import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { TestComponent } from './test/test.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'uzytkownicy', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'polubienia', component: LikesComponent, canActivate: [AuthGuard]},
  {path: 'wiadomosci', component: MessagesComponent, canActivate: [AuthGuard]},
  {path: 'testuj', component: TestComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},

];
