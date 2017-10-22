import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{"Title: " + title }}</h2>
    <h2 [textContent]="title"></h2>
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    <img src="{{imgUrl}}">
    <img [src]="imgUrl"/>
  `
})
export class CourcesComponent {

  title = 'Courses';
  courses;
  imgUrl = 'https://s1.postimg.org/37jme52re7/Koala.jpg';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

}
