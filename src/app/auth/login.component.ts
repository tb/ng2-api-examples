import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Validators, Control, ControlGroup, FORM_DIRECTIVES} from '@angular/common';

import {Field} from '../shared/field';
import {Auth} from './auth.service';

@Component({
  selector: 'login',
  template: require('./login.component.html'),
  styles: [],
  providers: [],
  directives: [Field, FORM_DIRECTIVES],
  pipes: []
})
export class LoginComponent {
  loginForm: ControlGroup;

  constructor(private auth: Auth,
              private router: Router) {
    this.loginForm = new ControlGroup({
      email: new Control('user@example.com', Validators.compose([Validators.required])),
      password: new Control('secret', Validators.compose([Validators.required]))
    });
  }

  onSubmit() {
    this.auth.login(this.loginForm.value);
  }
}
