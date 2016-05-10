import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';

import {Auth} from './auth/auth.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './auth/login.component';
import {PostsComponent} from './posts/posts.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [FORM_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, LoginComponent],
  pipes: [],
  styles: [],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/login', name: 'Login', component: LoginComponent },
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/posts/...', name: 'Posts', component: PostsComponent },
])
export class App {
  constructor(private auth: Auth) {
  }
}
