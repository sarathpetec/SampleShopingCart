import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{"Tittle: " + tittle }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>
  `
})
export class CourcesComponent {

  tittle = 'Courses tittle';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

}
