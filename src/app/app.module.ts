import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CourcesComponent} from './cources.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './courses.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FavoriteComponent} from './favorite/favorite.component';
import {InputFormatDirective} from './input-format.directive';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {NewcourseformComponent} from './newcourseform/newcourseform.component';
import {PostsComponent} from './posts/posts.component';
import {PostService} from './services/post.service';
import {AppGlobalError} from './exceptions/app-global-error';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {GithubProfileComponent} from './github-profile/github-profile.component';
import {GithubFollowersComponent} from './github-followers/github-followers.component';
import {GithubFollowersService} from './services/github-followers.service';
import {AuthorsComponent} from './authors/authors.component';
import {AuthorsService} from './services/authors.service';
import { NotFoundComponent } from './not-found/not-found.component';

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
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    AuthorsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'profile/:username', component: GithubProfileComponent},
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent},
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GithubFollowersService,
    AuthorsService,
    {provide: ErrorHandler, useClass: AppGlobalError}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
