import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrServiceService {

constructor(private toastr: ToastrService) { }


public showSuccess(messageDisplay: string) {
  this.toastr.success(messageDisplay);
}

public showError(messageDisplay: string) {
  this.toastr.error(messageDisplay);
}

}
