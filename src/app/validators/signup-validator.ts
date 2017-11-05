import {AbstractControl, ValidationErrors, Validator} from '@angular/forms';

export class Usernamevalidator {

  static CannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {
        CannotContainSpace: true
      };
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string) === 'sarath') {
          resolve({
            shouldBeUnique: true
          });
        } else {
          resolve(null);
        }
        console.log('Timeout Completed..!!');
      }, 5000);
    });
  }
}
