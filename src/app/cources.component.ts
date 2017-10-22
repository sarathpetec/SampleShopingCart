import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{"Tittle: " + tittle }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    <img src="{{imgUrl}}">
  `
})
export class CourcesComponent {

  tittle = 'Courses tittle';
  courses;
  imgUrl = 'https://s1.postimg.org/37jme52re7/Koala.jpg';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

}
