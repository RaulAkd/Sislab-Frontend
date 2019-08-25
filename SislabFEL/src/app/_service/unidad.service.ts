import { Unidad } from './../_model/unidad';
import { HOST2 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  unidadCambio = new Subject<Unidad[]>();
  url = `${HOST2}/unidad`;

  constructor( private http: HttpClient) { }

  listarUnidad() {
    return this.http.get<Unidad[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarTipoServicioPorId(id_tiposerv: string) {
    return this.http.get<TipoServicio>(`${this.url}/${id_tiposerv}`);
  } */

  registrarUnidad(unidad: Unidad) {
    return this.http.post( this.url, unidad);
  }

  modificarUnidad(unidad: Unidad) {
    return this.http.put( this.url, unidad);
  }

  // tslint:disable-next-line:variable-name
  eliminarUnidad(id_unidad: string) {
    return this.http.delete<Unidad>(`${this.url}/${id_unidad}`);
  }
}
