import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {AppError} from '../exceptions/app-error';
import {NotFoundError} from '../exceptions/not-found-error';
import {BadInputError} from '../exceptions/bad-input-error';
import {DataService} from './data.service';

@Injectable()
export class PostService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}
