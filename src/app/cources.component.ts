import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `
})
export class CourcesComponent {
  email = 'sarath@gmail.com';

  onKeyUp() {
    console.log(this.email);
  }
}
