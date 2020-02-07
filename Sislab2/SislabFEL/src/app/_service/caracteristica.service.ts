import { Caracteristica } from './../_model/caracteristica';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  caracteristicaCambio = new Subject<Caracteristica[]>();
  url = `${HOST3}/caracteristica`;

  constructor( private http: HttpClient) { }

  listarCaracteristica() {
    return this.http.get<Caracteristica[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarCaracteristica(caracteristica: Caracteristica) {
    return this.http.post( this.url, caracteristica);
  }

  modificarCaracteristica(caracteristica: Caracteristica) {
    return this.http.put( this.url, caracteristica);
  }

  // tslint:disable-next-line:variable-name
  eliminarCaracteristica(id_caracteristica: string) {
    return this.http.delete<Caracteristica>(`${this.url}/${id_caracteristica}`);
  }
}
