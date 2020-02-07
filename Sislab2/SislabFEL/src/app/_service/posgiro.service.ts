import { Posgiro } from './../_model/posgiro';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosgiroService {

  posgiroCambio = new Subject<Posgiro[]>();
  url = `${HOST3}/posgiro`;

  constructor( private http: HttpClient) { }

  listarPosgiro() {
    return this.http.get<Posgiro[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarPosgiro(posgiro: Posgiro) {
    return this.http.post( this.url, posgiro);
  }

  modificarPosgiro(posgiro: Posgiro) {
    return this.http.put( this.url, posgiro);
  }

  // tslint:disable-next-line:variable-name
  eliminarPosgiro(id_posgiro: string) {
    return this.http.delete<Posgiro>(`${this.url}/${id_posgiro}`);
  }
}
