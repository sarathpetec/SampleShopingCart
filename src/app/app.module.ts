import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourcesComponent} from './cources.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { NewcourseformComponent } from './newcourseform/newcourseform.component';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent,
    CourseComponent,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewcourseformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
