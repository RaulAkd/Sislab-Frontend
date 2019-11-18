import { TipoOrdenInventario } from './../_model/tipoOrdenInventario';
import { TipoProducto } from './../_model/tipoProducto';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoOrdenInventarioService {

  tipoOrdenInventarioCambio = new Subject<TipoOrdenInventario[]>();
  url = `${HOST3}/tipoOrdenInventario`;

  constructor( private http: HttpClient) { }

  listarTipoOrdenInventario() {
    return this.http.get<TipoOrdenInventario[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarTipoOrdenInventario(tipoOrdenInventario: TipoOrdenInventario) {
    return this.http.post( this.url, tipoOrdenInventario);
  }

  modificarTipoOrdenInventario(tipoOrdenInventario: TipoOrdenInventario) {
    return this.http.put( this.url, tipoOrdenInventario);
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoOrdenInventario(id_tipoordeninv: string) {
    return this.http.delete<TipoOrdenInventario>(`${this.url}/${id_tipoordeninv}`);
  }
}
