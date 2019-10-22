import { User } from "src/app/_models/user";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrServiceService } from "../_services/toastrService.service";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrServiceService
  ) {}

  ngOnInit() {}

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(
      next => {
        this.toastr.showSuccess("Zalogowano pomyślnie ");
      },
      error => {
        this.toastr.showError("Błąd logowania ");
      },
      () => {
        this.router.navigate(["/uzytkownicy"]);
      }
    );
  }

  loggedIn() {
    return this.authService.logedIn();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.router.navigate(["/home"]);
    this.toastr.showSuccess("Wylogowano ");
  }
}
