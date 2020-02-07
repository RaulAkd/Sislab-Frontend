import { Presentacion } from './../_model/presentacion';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {

  presentacionCambio = new Subject<Presentacion[]>();
  url = `${HOST3}/presentacion`;

  constructor( private http: HttpClient) { }

  listarPresentacion() {
    return this.http.get<Presentacion[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarPresentacion(presentacion: Presentacion) {
    return this.http.post( this.url, presentacion);
  }

  modificarPresentacion(presentacion: Presentacion) {
    return this.http.put( this.url, presentacion);
  }

  // tslint:disable-next-line:variable-name
  eliminarPresentacion(id_presentacion: string) {
    return this.http.delete<Presentacion>(`${this.url}/${id_presentacion}`);
  }
}
