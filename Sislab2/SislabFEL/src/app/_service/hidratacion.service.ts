import { Hidratacion } from './../_model/hidratacion';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HidratacionService {

  hidratacionCambio = new Subject<Hidratacion[]>();
  url = `${HOST3}/hidratacion`;

  constructor( private http: HttpClient) { }

  listarHidratacion() {
    return this.http.get<Hidratacion[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarHidratacion(hidratacion: Hidratacion) {
    return this.http.post( this.url, hidratacion);
  }

  modificarHidratacion(hidratacion: Hidratacion) {
    return this.http.put( this.url, hidratacion);
  }

  // tslint:disable-next-line:variable-name
  eliminarHidratacion(id_hidratacion: string) {
    return this.http.delete<Hidratacion>(`${this.url}/${id_hidratacion}`);
  }
}
