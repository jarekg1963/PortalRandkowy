import { AuthGuard } from './_guards/auth.guard';
import { UserListComponent } from './users/user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmationDialogComponent } from './alerty/confirmation-dialog/confirmation-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from './alerty/confirmation-dialog.service';
import { AlertDialogComponent } from './alerty/alert-dialog/alert-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from './_services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { config } from 'rxjs';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { TestComponent } from './test/test.component';

export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ConfirmationDialogComponent,
      AlertDialogComponent,
      UserListComponent,
      LikesComponent,
      MessagesComponent,
      TestComponent
   ],
   entryComponents: [ConfirmationDialogComponent,  AlertDialogComponent],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      NgbModule, NgbPaginationModule, NgbAlertModule,
      BrowserAnimationsModule,
      JwtModule.forRoot({
        config: {
          tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
        }
      ),
      ToastrModule.forRoot(
        {
          timeOut: 1000,
          positionClass: 'toast-bottom-right'
        }
      ),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService, ConfirmationDialogService , ToastrService, UserService ,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
