import { Compra } from './../_model/compra';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  CompraCambio = new Subject<Compra[]>();
  url = `${HOST3}/compra`;

  constructor( private http: HttpClient) { }

  listarCompra() {
    return this.http.get<Compra[]>(this.url);
  }

  // tslint:disable-next-line:variable-name
  /*listarLaboratorioPorId(id_laboratorio: string) {
    return this.http.get<Laboratorio>(`${this.url}/${id_laboratorio}`);
  }*/

  registrarCompra(compra: Compra) {
    return this.http.post( this.url, compra);
  }

  modificarCompra(compra: Compra) {
    return this.http.put( this.url, compra);
  }

  // tslint:disable-next-line:variable-name
  eliminarCompra(id_compra: string) {
    return this.http.delete<Compra>(`${this.url}/${id_compra}`);
  }
}
