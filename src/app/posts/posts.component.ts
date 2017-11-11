import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {post} from 'selenium-webdriver/http';
import {PostService} from '../services/post.service';

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
    let post: any = {title: inputPost.value};
    inputPost.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
      });
  }

  deletePost(inputPost: HTMLInputElement) {
    this.service.deletePost(inputPost.id).subscribe(response => {
      const index = this.posts.indexOf(inputPost);
      this.posts.splice(index, 1);
    });
  }

  readPost(input: HTMLInputElement) {
    input['isRead'] = true;
  }

}
