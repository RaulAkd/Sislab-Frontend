import { Existencias } from './../_model/existencias';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExistenciasService {

  ExistenciasCambio = new Subject<Existencias[]>();
  url = `${HOST3}/existencias`;

  constructor( private http: HttpClient) { }

  listarExistencias() {
    return this.http.get<Existencias[]>(this.url);
  }

  registrarExistencias(existencias: Existencias) {
    return this.http.post( this.url, existencias);
  }

  modificarExistencias(existencias: Existencias) {
    return this.http.put( this.url, existencias);
  }

  // tslint:disable-next-line:variable-name
  eliminarExistencias(id_existencias: string) {
    return this.http.delete<Existencias>(`${this.url}/${id_existencias}`);
  }
}
