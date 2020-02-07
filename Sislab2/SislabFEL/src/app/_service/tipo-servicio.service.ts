import { TipoServicio } from './../_model/tipoServicio';
import { HOST } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoServicioService {

  tipoServicioCambio = new Subject<TipoServicio[]>();
  url = `${HOST}/tipoServicio`;

  constructor( private http: HttpClient) { }

  listarTipoServicio() {
    return this.http.get<TipoServicio[]>(this.url);
  }

  // tslint:disable-next-line:variable-name
  listarTipoServicioPorId(id_tiposerv: string) {
    return this.http.get<TipoServicio>(`${this.url}/${id_tiposerv}`);
  }

  registrarTipoServicio(tipoServicio: TipoServicio) {
    return this.http.post( this.url, tipoServicio);
  }

  modificarTipoServicio(tipoServicio: TipoServicio) {
    return this.http.put( this.url, tipoServicio);
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoServicio(id_tiposerv: string) {
    return this.http.delete<TipoServicio>(`${this.url}/${id_tiposerv}`);
  }
}
