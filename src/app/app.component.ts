import {Component} from '@angular/core';
import {FavoriteChangeEventArgs} from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFavorite = {
    title: 'Angular Application',
    isSelected: true
  };

  courses = [1, 2];
  viewMode: String = 'map';
  courseObject = [
    {id: 1, name: 'course-1'},
    {id: 3, name: 'course-2'},
    {id: 2, name: 'course-3'}
  ];

  onClick() {
    console.log('Mode Value: ' + this.viewMode);
  }

  onFavoriteChange(isSelectes: FavoriteChangeEventArgs) {
    console.log('OnFavoriteChange triggered', isSelectes);
  }

  AddCourse() {
    const courseLength = this.courseObject.length + 1;
    this.courseObject.push(
      {id: courseLength, name: 'course-' + courseLength}
    );
  }

  removeCourse(course) {
    const index = this.courseObject.indexOf(course);
    console.log('index: '+ index);
    this.courseObject.splice(index, 1);
  }
}
