import { HOST } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoCliente } from '../_model/tipoCliente';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService {

  tipoClienteCambio = new Subject<TipoCliente[]>();
  url = `${HOST}/tipoClientes`;

  constructor( private http: HttpClient) { }

  listarTipoCliente() {
    return this.http.get<TipoCliente[]>(this.url);
  }

  // tslint:disable-next-line:variable-name
  listarTipoClientePorId(id_tipocliente: string) {
    return this.http.get<TipoCliente>(`${this.url}/${id_tipocliente}`);
  }

  registrarTipoCliente(tipoCLiente: TipoCliente) {
    return this.http.post( this.url, tipoCLiente);
  }

  modificarTipoCliente(tipoCLiente: TipoCliente) {
    return this.http.put( this.url, tipoCLiente);
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoCliente(id_tipocliente: string) {
    return this.http.delete<TipoCliente>(`${this.url}/${id_tipocliente}`);
  }
}
