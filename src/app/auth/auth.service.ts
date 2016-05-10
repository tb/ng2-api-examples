import {provide, Injectable, NgZone} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router-deprecated';
import {ApiConfig, ApiHttp} from 'ng2-api';

export function authenticated(): boolean {
  return !!localStorage.getItem('token');
}

@Injectable()
export class Auth {
  user: Object;

  constructor(protected http: ApiHttp,
              protected zone: NgZone,
              protected router: Router) {
    this.user = JSON.parse(localStorage.getItem('profile'));
  }

  authenticated() {
    return authenticated();
  }

  login(params: any) {
    return this.http.post('login', JSON.stringify(params))
      .subscribe((res: Response) => {
        let {token, user} = res.json();
        localStorage.setItem('profile', JSON.stringify(user));
        localStorage.setItem('token', token);
        this.zone.run(() => this.user = user);
        this.router.navigate(['/Dashboard']);
      });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    this.zone.run(() => this.user = null);
    this.router.navigate(['/Login']);
  }
}

export const AUTH_PROVIDERS: any = [
  provide(ApiHttp, {
    useFactory: (http: Http) => {
      return new ApiHttp(new ApiConfig({baseUrl: 'http://localhost:8081'}), http);
    },
    deps: [Http]
  }),
  Auth
];
