import { AuthGuard } from "./_guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { UserListComponent } from "./users/user-list/user-list.component";
import { LikesComponent } from "./likes/likes.component";
import { MessagesComponent } from "./messages/messages.component";
import { TestComponent } from "./test/test.component";

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'uzytkownicy', component: UserListComponent },
      { path: 'polubienia', component: LikesComponent },
      { path: 'wiadomosci', component: MessagesComponent },
      { path: 'testuj', component: TestComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
