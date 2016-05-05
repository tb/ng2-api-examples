import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PostsComponent} from './posts/posts.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [FORM_PROVIDERS],
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  styles: [],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/posts/...', name: 'Posts', component: PostsComponent },
])
export class App {}
