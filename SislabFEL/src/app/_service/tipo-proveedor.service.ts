import { TipoProveedor } from './../_model/tipoProveedor';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoProveedorService {

  tipoProveedorCambio = new Subject<TipoProveedor[]>();
  url = `${HOST3}/tipoProveedor`;

  constructor( private http: HttpClient) { }

  listarTipoProveedor() {
    return this.http.get<TipoProveedor[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarTipoProveedor(tipoProveedor: TipoProveedor) {
    return this.http.post( this.url, tipoProveedor);
  }

  modificarTipoProveedor(tipoProveedor: TipoProveedor) {
    return this.http.put( this.url, tipoProveedor);
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoProveedor(id_tipoproveedor: string) {
    return this.http.delete<TipoProveedor>(`${this.url}/${id_tipoproveedor}`);
  }
}
