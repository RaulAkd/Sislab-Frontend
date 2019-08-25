import { Servicio } from './../_model/servicio';
import { HOST } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  ServicioCambio = new Subject<Servicio[]>();
  url = `${HOST}/servicio`;

  constructor( private http: HttpClient) { }

  listarServicio() {
    return this.http.get<Servicio[]>(this.url);
  }

  // tslint:disable-next-line:variable-name
  // listarServicioPorId(id_cliente: string) {
    // return this.http.get<Cliente>(`${this.url}/${id_cliente}`);
  // }

  registrarServicio(servicio: Servicio) {
    return this.http.post( this.url, servicio);
  }

  modificarServicio(servicio: Servicio) {
    return this.http.put( this.url, servicio);
  }

  // tslint:disable-next-line:variable-name
  eliminarServicio(id_servicio: string) {
    return this.http.delete<Servicio>(`${this.url}/${id_servicio}`);
  }
}
