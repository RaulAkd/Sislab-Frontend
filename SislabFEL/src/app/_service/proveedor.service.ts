import { Proveedor } from './../_model/proveedor';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  ProveedorCambio = new Subject<Proveedor[]>();
  url = `${HOST3}/proveedor`;

  constructor( private http: HttpClient) { }

  listarProveedor() {
    return this.http.get<Proveedor[]>(this.url);
  }

  // tslint:disable-next-line:variable-name
  /*listarClientePorId(id_cliente: string) {
    return this.http.get<Cliente>(`${this.url}/${id_cliente}`);
  }*/

  registrarProveedor(proveedor: Proveedor) {
    return this.http.post( this.url, proveedor);
  }

  modificarProveedor(proveedor: Proveedor) {
    return this.http.put( this.url, proveedor);
  }

  // tslint:disable-next-line:variable-name
  eliminarProveedor(id_proveedor: string) {
    return this.http.delete<Proveedor>(`${this.url}/${id_proveedor}`);
  }
}
