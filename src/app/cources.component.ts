import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  template: `
   <button class="btn btn-primary">Save</button>
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
