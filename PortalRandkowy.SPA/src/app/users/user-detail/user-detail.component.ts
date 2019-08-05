import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { ToastrServiceService } from 'src/app/_services/toastrService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
user: User;
  constructor(private userServices: UserService, private route: ActivatedRoute,
    private alert: ToastrServiceService ) { }

  ngOnInit() {
this.loadUser()
  }


  loadUser() {
    this.userServices.getUser(+this.route.snapshot.params.id)
       .subscribe((user: User) => {
         this.user = user;
       });
  }



}
