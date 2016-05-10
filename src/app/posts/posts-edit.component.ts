import {Component, OnInit} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {CanActivate, Router, RouteParams} from '@angular/router-deprecated';
import {PostsService, Post} from './posts.service';
import {Field} from '../shared/field';
import {authenticated} from '../auth/auth.service';

@Component({
  selector: 'posts-edit',
  template: require('./posts-edit.component.html'),
  styles: [],
  providers: [],
  directives: [FORM_DIRECTIVES, Field],
  pipes: []
})

@CanActivate(() => authenticated())

export class PostsEditComponent implements OnInit {
  post: Post;
  postForm: ControlGroup;

  constructor(private postsService: PostsService,
              private routeParams: RouteParams,
              private router: Router,
              private formBuilder: FormBuilder) {

    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit() {
    let id = this.routeParams.get('id');

    if (id) {
      this.postsService.find(id)
        .subscribe((post: Post) => this.post = post);
    } else {
      this.post = <Post>{};
    }
  }

  onSubmit() {
    if (this.post.id) {
      this.postsService.update(this.post)
        .subscribe((post: Post) => this.goToIndex());
    } else {
      this.postsService.create(this.post)
        .subscribe((post: Post) => this.goToIndex());
    }
  }

  goToIndex() {
    this.router.navigate(['Index']);
  }

}
