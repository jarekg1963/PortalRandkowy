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

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ConfirmationDialogComponent,
      AlertDialogComponent,
   ],
   entryComponents: [ConfirmationDialogComponent,  AlertDialogComponent],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      NgbModule, NgbPaginationModule, NgbAlertModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(
        {
          timeOut: 1000,
          positionClass: 'toast-bottom-right'
        }
      )
   ],
   providers: [
      AuthService, ConfirmationDialogService , ToastrService, UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
