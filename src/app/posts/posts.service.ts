import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ApiService} from 'ng2-api';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class PostsService extends ApiService<Post> {
  constructor(public http: Http) {
    super(http, 'http://localhost:8081', 'posts');
  }
}
