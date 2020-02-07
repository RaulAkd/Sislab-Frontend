import { Muestra } from './../_model/muestra';
import { HOST2 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuestraService {

  muestraCambio = new Subject<Muestra[]>();
  url = `${HOST2}/muestra`;

  constructor( private http: HttpClient) { }

  listarMuestra() {
    return this.http.get<Muestra[]>(this.url);
  }

  registrarMuestra(muestra: Muestra) {
    return this.http.post( this.url, muestra);
  }

  modificarMuestra(muestra: Muestra) {
    return this.http.put( this.url, muestra);
  }

  // tslint:disable-next-line:variable-name
  eliminarMuestra(id_muestra: string) {
    return this.http.delete<Muestra>(`${this.url}/${id_muestra}`);
  }
}
