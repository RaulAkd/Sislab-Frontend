import { TipoProducto } from './../_model/tipoProducto';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  tipoProductoCambio = new Subject<TipoProducto[]>();
  url = `${HOST3}/tipoProducto`;

  constructor( private http: HttpClient) { }

  listarTipoProducto() {
    return this.http.get<TipoProducto[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarTipoProducto(tipoProducto: TipoProducto) {
    return this.http.post( this.url, tipoProducto);
  }

  modificarTipoProducto(tipoProducto: TipoProducto) {
    return this.http.put( this.url, tipoProducto);
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoProducto(id_tipoprod: string) {
    return this.http.delete<TipoProducto>(`${this.url}/${id_tipoprod}`);
  }
}
