import { AuthService } from "./../_services/auth.service";
import { Component, OnInit } from "@angular/core";
import { ConfirmationDialogService } from '../alerty/confirmation-dialog.service';
import { Router } from '@angular/router';



@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(public authService: AuthService, private confirmationDialogService: ConfirmationDialogService, private router: Router) {}

  ngOnInit() {}

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(
      next => {
       // console.log("Zalogowałeś sie do aplikacji");
       this.confirmationDialogService.alertOkno('OK', 'Zalogowaleś sie do aplikacji  ', '   OK   ');
      },
      error => {
      //  console.log("Wystąpił błąd logowania");
      this.confirmationDialogService.alertOkno('Błąd', 'Błąd logowania   ', '   OK   ');
      },
       () => { this.router.navigate(['/uzytkownicy'])}
    );
  }

  loggedIn() {
    return this.authService.logedIn();

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }


}
