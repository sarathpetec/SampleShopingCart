import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {AppError} from '../exceptions/app-error';
import {NotFoundError} from '../exceptions/not-found-error';
import {BadInputError} from '../exceptions/bad-input-error';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) {
  }

  getAll() {
    return this.http.get(this.url);
  }

  create(inputPost) {
    return this.http.post(this.url, JSON.stringify(inputPost)).catch(this.handleException);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).catch(this.handleException);
  }

  private handleException(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputError(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error));
    }
    return Observable.throw(new AppError(error));
  }

}
