import { AuthService } from "./../_services/auth.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ToastrServiceService } from "../_services/toastrService.service";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  registerForm: FormGroup;

  constructor(
    private toastr: ToastrServiceService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {

    this.createRegisterForm();

    // this.registerForm = new FormGroup({
    //   username: new FormControl('', Validators.required),
    //   password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10) ]),
    //   confirmPassword: new FormControl('', Validators.required)
    // },this.passwordMatchValidator);
  }

createRegisterForm() {
  this.registerForm = this.fb.group({

    username: ['', Validators.required],

    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],

    confirmPassword: ['', Validators.required]

  }, {validator: this.passwordMatchValidator});
}

passwordMatchValidator(fg: FormControl){
  return fg.get('password').value === fg.get('confirmPassword').value ? null : { mismatch: true };

}

  register() {
    console.log(this.registerForm.value);

    // this.authService.registeracja(this.model).subscribe(() => {
    //   this.toastr.showSuccess('Zapisano OK');
    // }, error => {
    //   this.toastr.showError('Blad rejestracji ');
    // });
  }

  cancel() {
    console.log("Anulowane");
    this.cancelRegister.emit(false);
  }
}
