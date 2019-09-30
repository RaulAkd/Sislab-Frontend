import { Concentracion } from './../_model/concentracion';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcentracionService {

  concentracionCambio = new Subject<Concentracion[]>();
  url = `${HOST3}/concentracion`;

  constructor( private http: HttpClient) { }

  listarConcentracion() {
    return this.http.get<Concentracion[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarConcentracion(concentracion: Concentracion) {
    return this.http.post( this.url, concentracion);
  }

  modificarConcentracion(concentracion: Concentracion) {
    return this.http.put( this.url, concentracion);
  }

  // tslint:disable-next-line:variable-name
  eliminarConcentracion(id_concentracion: string) {
    return this.http.delete<Concentracion>(`${this.url}/${id_concentracion}`);
  }
}
