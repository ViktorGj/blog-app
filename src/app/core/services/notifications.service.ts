import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message) {
    this.toastr.success(message)
  }

  showError(message) {
    this.toastr.error(message)
  }
}
