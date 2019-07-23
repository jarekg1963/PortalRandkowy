import { AuthService } from "./../_services/auth.service";
import { Component, OnInit } from "@angular/core";
import { ConfirmationDialogService } from '../alerty/confirmation-dialog.service';



@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(private authService: AuthService, private confirmationDialogService: ConfirmationDialogService) {}

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
      }
    );
  }

  loggedIn() {
    return this.authService.logedIn();
  }

  logout() {
    localStorage.removeItem("token");
    console.log("zostałeś wylogowany ");
  }


}
