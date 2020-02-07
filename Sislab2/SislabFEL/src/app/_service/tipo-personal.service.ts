import { TipoPersonal } from './../_model/tipoPersonal';
import { HOST2 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoPersonalService {

  tipoPersonalCambio = new Subject<TipoPersonal[]>();
  url = `${HOST2}/tipoPersonal`;

  constructor( private http: HttpClient) { }

  listarTipoPersonal() {
    return this.http.get<TipoPersonal[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarTipoPersonal(tipoPersonal: TipoPersonal) {
    return this.http.post( this.url, tipoPersonal);
  }

  modificarTipoPersonal(tipoPersonal: TipoPersonal) {
    return this.http.put( this.url, tipoPersonal);
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoPersonal(id_tipopersonal: string) {
    return this.http.delete<TipoPersonal>(`${this.url}/${id_tipopersonal}`);
  }
}
