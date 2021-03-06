import { PhotosComponent } from './users/photos/photos.component';
import { PreventUnsevedChanges } from './_guards/prevent-unsaved-changes';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserListComponent } from './users/user-list/user-list.component';

import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NgxGalleryModule } from 'ngx-gallery';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from './_services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { TestComponent } from './test/test.component';
import { BsDropdownModule, TabsModule, BsDatepickerModule } from 'ngx-bootstrap';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { FileUploadModule } from 'ng2-file-upload';




export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      UserListComponent,
      LikesComponent,
      MessagesComponent,
      TestComponent,
      UserCardComponent,
      UserDetailComponent,
      UserEditComponent,
      PhotosComponent
   ],
   entryComponents: [],
   imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      FileUploadModule,
      BrowserAnimationsModule,
      BsDatepickerModule.forRoot(),
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
      ToastrModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      NgxGalleryModule

   ],
   providers: [
      AuthService, ToastrService, UserService ,
      AuthGuard, ErrorInterceptorProvider, UserDetailResolver , UserListResolver, UserEditResolver,
      PreventUnsevedChanges
   ],
   bootstrap: [
      AppComponent
   ],
   exports: [
]
})
export class AppModule { }
