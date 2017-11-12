import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PostService {

  private url = 'https://asvjsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getPost() {
    return this.http.get(this.url);
  }

  createPost(inputPost) {
    return this.http.post(this.url, JSON.stringify(inputPost));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
