import {Injectable} from '@angular/core';
import {ApiHttp, ApiService} from 'ng2-api';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class PostsService extends ApiService<Post> {
  constructor(protected http: ApiHttp) {
    super(http, 'posts');
  }
}
