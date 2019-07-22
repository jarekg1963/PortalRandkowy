import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationDialogService } from '../alerty/confirmation-dialog.service';


declare let alertify: any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() valuesFromHome: any;
@Output() cancelRegister = new EventEmitter();

  model: any = {};


  constructor(private authService: AuthService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {

  }


  pytajOzapis() {
    this.confirmationDialogService.confirm('','Czy jesteś pewien ? ', 'OK', 'Rezygnacja')
    .then((confirmed) => this.register(confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }




  register(dd: boolean) {
    console.log(dd);
    if (dd) {
    this.authService.registeracja(this.model).subscribe(() => {
      this.confirmationDialogService.alertOkno('OK', 'Zapisano  ', '   OK   ');
    }, error => {
      this.confirmationDialogService.alertOkno('Uwaga ', ' Błąd zapisu  ', '    OK    ');
    });
  }
  }


cancel() {
  console.log('Anulowane');
  this.cancelRegister.emit(false);
}

}
