import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrServiceService {

constructor(private toastr: ToastrService) { }


public showSuccess(messageDisplay: string) {
  this.toastr.success(messageDisplay,'OK',{
    positionClass: 'toast-bottom-right'
 });
}

public showError(messageDisplay: string) {
  this.toastr.error(messageDisplay, 'Error', {
    positionClass: 'toast-bottom-right'
 });
}

}
