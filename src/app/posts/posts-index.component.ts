import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {PostsService, Post} from './posts.service';
import {SearchInput} from '../shared/search-input';

@Component({
  selector: 'posts-index',
  template: require('./posts-index.component.html'),
  styles: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES, SearchInput],
  pipes: []
})
export class PostsIndexComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.findAll()
      .subscribe((posts: Post[]) => this.posts = posts);
  }

  searchPosts(field, value) {
    let params = {q: value};
    return this.postsService.findAll(params)
      .subscribe((posts: Post[]) => this.posts = posts);
  }

  deletePost(post: Post) {
    if (!confirm('Are you sure?')) {
      return;
    }

    this.postsService.delete(post)
      .subscribe(() => this.getPosts());
  }

}
