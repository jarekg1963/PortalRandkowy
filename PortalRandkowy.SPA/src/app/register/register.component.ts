import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationDialogService } from '../alerty/confirmation-dialog.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() valuesFromHome: any;
@Output() cancelRegister = new EventEmitter();

  model: any = {};


  constructor(private toastr: ToastrService, private authService: AuthService,
    private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {

  }

  pytajOzapis() {
    this.confirmationDialogService.confirm('', 'Czy jesteś pewien ? ', 'OK', 'Rezygnacja')
    .then((confirmed) => this.register(confirmed))
}


  register(dd: boolean) {
    console.log(dd);
    if (dd) {
    this.authService.registeracja(this.model).subscribe(() => {
      this.toastr.success('Zapisano', 'OK');
    }, error => {
      this.toastr.error('Blad ', 'Blad');
    });

}


  }


cancel() {
  console.log('Anulowane');
  this.cancelRegister.emit(false);
}

}
