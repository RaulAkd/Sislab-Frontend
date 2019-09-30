import { Unidad } from './../_model/unidad';
import { HOST2, TOKEN_NAME } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  unidadCambio = new Subject<Unidad[]>();
  url = `${HOST2}unidad`;

  constructor( private http: HttpClient) { }

  listarUnidad() {

    console.log('empieza metodo');
    console.log(sessionStorage.getItem(TOKEN_NAME));
    // tslint:disable-next-line:prefer-const
    let access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
    console.log('el token es:');
    console.log(access_token);
    console.log(this.url);
    return this.http.get<Unidad[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${access_token}`).set('Content-Type', 'application/json')
    });
  }

/*  // tslint:disable-next-line:variable-name
  listarTipoServicioPorId(id_tiposerv: string) {
    return this.http.get<TipoServicio>(`${this.url}/${id_tiposerv}`);
  } */

  registrarUnidad(unidad: Unidad) {
    return this.http.post( this.url, unidad);
  }

  modificarUnidad(unidad: Unidad) {
    return this.http.put( this.url, unidad);
  }

  // tslint:disable-next-line:variable-name
  eliminarUnidad(id_unidad: string) {
    return this.http.delete<Unidad>(`${this.url}/${id_unidad}`);
  }
}
