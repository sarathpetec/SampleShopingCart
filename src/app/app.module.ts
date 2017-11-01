import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourcesComponent} from './cources.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import {FormsModule} from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent,
    CourseComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
