import { RiesgoEspecifico } from './../_model/riesgoEspecifico';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiesgoEspecificoService {

  riesgoEspecificoCambio = new Subject<RiesgoEspecifico[]>();
  url = `${HOST3}/riesgoEspecifico`;

  constructor( private http: HttpClient) { }

  listarRiesgosEspecifico() {
    return this.http.get<RiesgoEspecifico[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarRiesgoEspecifico(riesgoEspecifico: RiesgoEspecifico) {
    return this.http.post( this.url, riesgoEspecifico);
  }

  modificarRiesgoEspecifico(riesgoEspecifico: RiesgoEspecifico) {
    return this.http.put( this.url, riesgoEspecifico);
  }

  // tslint:disable-next-line:variable-name
  eliminarRiesgoEspecifico(id_riesgoespecifico: string) {
    return this.http.delete<RiesgoEspecifico>(`${this.url}/${id_riesgoespecifico}`);
  }
}
