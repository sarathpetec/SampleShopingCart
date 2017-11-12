import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {post} from 'selenium-webdriver/http';
import {PostService} from '../services/post.service';
import {AppError} from '../exceptions/app-error';
import {NotFoundError} from '../exceptions/not-found-error';
import {BadInputError} from '../exceptions/bad-input-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getPost().subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(inputPost: HTMLInputElement) {
    const post: any = {title: inputPost.value};
    inputPost.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
      }, (error: AppError) => {
        if (error instanceof BadInputError) {
          alert('Bad Request Exception');
          console.log('Bad Request Exception Error Occurred: ' + error);
        } else {
          throw error;
        }
      });
  }

  deletePost(inputPost: HTMLInputElement) {
    this.service.deletePost(inputPost.id).subscribe(response => {
      const index = this.posts.indexOf(inputPost);
      this.posts.splice(index, 1);
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert('This Post has already been deleted.');
        console.log('This Post has already been deleted');
      } else {
       throw error;
      }
    });
  }

  readPost(input: HTMLInputElement) {
    input['isRead'] = true;
  }

}
