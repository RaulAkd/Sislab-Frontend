import { Subject } from 'rxjs';
import { Menu } from './../_model/menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOSTG, TOKEN_NAME } from './../_shared/var.constant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuCambio = new Subject<Menu[]>();
  private url = `${HOSTG}`;

  constructor(private http: HttpClient) { }

  listar() {
    console.log('viene a mandar el bearer');
    // tslint:disable-next-line:prefer-const
    let access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
    return this.http.get<Menu[]>(`${this.url}/menus`, {
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json')
    });
  }

  listarPorUsuario(nombre: string) {
    console.log('vino a listar por user');
    console.log(this.url);
    // tslint:disable-next-line:prefer-const
    let access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
    console.log(access_token);
    return this.http.post<Menu[]>(`${this.url}/menus/usuario`, nombre, {
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json')
    });
  }
}
