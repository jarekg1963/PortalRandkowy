import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() valuesFromHome: any;
@Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }


  register() {
    this.authService.registeracja(this.model).subscribe(() => {
      console.log('rejestracja udana');
    }, error => {
      console.log('wystąpił błąd rejestracji');
    });
  }


cancel() {
  console.log('Anulowane');
  this.cancelRegister.emit(false);
}

}
