import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOSTG, TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD, TOKEN_NAME } from '../_shared/var.constant';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // url = 'http://localhost:8082/oauth/token';
  url = `${HOSTG}oauth/token`;
  constructor(private http: HttpClient, private router: Router) { }
  login(usuario: string, contrasena: string) {
    const body = `grant_type=password&username=${encodeURIComponent(usuario)}&password=${encodeURIComponent(contrasena)}`;

    return this.http.post(this.url, body, {
      // tslint:disable-next-line:max-line-length
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8').set('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD))
    });
  }

  estaLogeado() {
    // tslint:disable-next-line:prefer-const
    let token = sessionStorage.getItem(TOKEN_NAME);
    return token != null;
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
