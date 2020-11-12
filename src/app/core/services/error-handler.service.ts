import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }


  handleError(error: Error | HttpErrorResponse) {
    const notifier = this.injector.get(NotificationsService);

    if (error instanceof HttpErrorResponse) {
      // Server Error
      const message = error.message;
      notifier.showError(message);
    } else {
      // Client Error
      const message = error.message ? error.message : error.toString();
      notifier.showError(message)
    }
  }


}
