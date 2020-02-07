import { Factura } from './../_model/factura';
import { facturacion } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../_model/cliente';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  FacturaCambio = new Subject<Factura[]>();
  url = `${facturacion}`;

  constructor( private http: HttpClient) { }

  listarFacturas() {
    return this.http.get<Factura[]>(this.url);
  }

  /*// tslint:disable-next-line:variable-name
  listarClientePorId(id_cliente: string) {
    return this.http.get<Cliente>(`${this.url}/${id_cliente}`);
  }

  registrarCliente(cliente: Cliente) {
    return this.http.post( this.url, cliente);
  }

  modificarCliente(cliente: Cliente) {
    return this.http.put( this.url, cliente);
  }

  // tslint:disable-next-line:variable-name
  eliminarCliente(id_cliente: string) {
    return this.http.delete<Cliente>(`${this.url}/${id_cliente}`);
  } */
}
