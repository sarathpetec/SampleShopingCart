import { ErrorHandler } from '@angular/core';

export class AppGlobalError implements ErrorHandler {

  handleError(error) {
    alert('An UnExpected Error Occurred.');
    console.log('Error Occurred: ' + error);
  }

}
