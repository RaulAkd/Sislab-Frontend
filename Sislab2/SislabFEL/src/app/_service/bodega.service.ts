import { Bodega } from './../_model/bodega';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  bodegaCambio = new Subject<Bodega[]>();
  url = `${HOST3}/bodega`;

  constructor( private http: HttpClient) { }

  listarBodega() {
    return this.http.get<Bodega[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarBodega(bodega: Bodega) {
    return this.http.post( this.url, bodega);
  }

  modificarBodega(bodega: Bodega) {
    return this.http.put( this.url, bodega);
  }

  // tslint:disable-next-line:variable-name
  eliminarBodega(id_bodega: string) {
    return this.http.delete<Bodega>(`${this.url}/${id_bodega}`);
  }
}
