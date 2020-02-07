import { HOST } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../_model/cliente';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  ClienteCambio = new Subject<Cliente[]>();
  url = `${HOST}/clientes`;

  constructor( private http: HttpClient) { }

  listarCliente() {
    return this.http.get<Cliente[]>(this.url);
  }

  // tslint:disable-next-line:variable-name
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
  }
}
