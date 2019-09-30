import { EstadoProducto } from './../_model/estadoProducto';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoProductoService {

  estadoProductoCambio = new Subject<EstadoProducto[]>();
  url = `${HOST3}/estadoProducto`;

  constructor( private http: HttpClient) { }

  listarEstadoProducto() {
    return this.http.get<EstadoProducto[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarEstadoProducto(estadoProducto: EstadoProducto) {
    return this.http.post( this.url, estadoProducto);
  }

  modificarEstadoProducto(estadoProducto: EstadoProducto) {
    return this.http.put( this.url, estadoProducto);
  }

  // tslint:disable-next-line:variable-name
  eliminarEstadoProducto(id_estadoprod: string) {
    return this.http.delete<EstadoProducto>(`${this.url}/${id_estadoprod}`);
  }
}
