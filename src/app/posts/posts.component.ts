import {Component} from '@angular/core';
import {PostsIndexComponent} from './posts-index.component';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {PostsService} from './posts.service';
import {PostsEditComponent} from './posts-edit.component';

@Component({
  selector: 'posts',
  template: `<router-outlet></router-outlet>`,
  styles: [],
  providers: [PostsService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path: '/index', name: 'Index', component: PostsIndexComponent, useAsDefault: true},
  {path: '/edit/:id', name: 'Edit', component: PostsEditComponent},
  {path: '/new', name: 'New', component: PostsEditComponent}
])
export class PostsComponent {}
