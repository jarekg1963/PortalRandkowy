import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ToastrServiceService } from 'src/app/_services/toastrService.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
      @ViewChild('editform', {static: false}) editform: NgForm;


  constructor(private route: ActivatedRoute,  private alert: ToastrServiceService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

  updateUser() {
    console.log(this.user);
    this.alert.showSuccess("Zapisano !!!!");
    this.editform.reset(this.user);
  }

}
