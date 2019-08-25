import { CargosPersonal } from './../_model/cargospersonal';
import { HOST2 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargosPersonalService {

  cargosPersonalCambio = new Subject<CargosPersonal[]>();
  url = `${HOST2}/cargosPersonal`;

  constructor( private http: HttpClient) { }

  listarCargosPersonal() {
    return this.http.get<CargosPersonal[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarCargosPersonal(cargosPersonal: CargosPersonal) {
    return this.http.post( this.url, cargosPersonal);
  }

  modificarCargosPersonal(cargosPersonal: CargosPersonal) {
    return this.http.put( this.url, cargosPersonal);
  }

  // tslint:disable-next-line:variable-name
  eliminarCargosPersonal(id_cargo: string) {
    return this.http.delete<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
}
