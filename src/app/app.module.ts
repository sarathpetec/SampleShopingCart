import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

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
import { PostsComponent } from './posts/posts.component';
import {PostService} from './services/post.service';
import {AppGlobalError} from './exceptions/app-global-error';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent,
    CourseComponent,
    FavoriteComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewcourseformComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    PostService,
    { provide: ErrorHandler, useClass: AppGlobalError }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
