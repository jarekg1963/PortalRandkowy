import { Injectable } from "@angular/core";
import { Resolve, Router, Route, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class UserListResolver implements Resolve<User> {

  constructor(private userService: UserService, private router: Router,
    private toastr: ToastrService) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
   return this.userService.getUsers().pipe(
     catchError(error => {
       this.toastr.error('problem z pobraniem danych ');
       this.router.navigate(['']);
       return of(null);
     })
   );
  }

}
