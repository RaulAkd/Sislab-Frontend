import { Proforma } from './../_model/proforma';
import { HOST } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProformaService {

  proformaCambio = new Subject<Proforma[]>();
  url = `${HOST}/proformas`;

  constructor( private http: HttpClient) { }

  listarProforma() {
    return this.http.get<Proforma[]>(this.url);
  }

  registrarProforma(proforma: Proforma) {
    return this.http.post( this.url, proforma);
  }

  modificarProforma(proforma: Proforma) {
    return this.http.put( this.url, proforma);
  }

  // tslint:disable-next-line:variable-name
  eliminarProforma(id_proforma: string) {
    return this.http.delete<Proforma>(`${this.url}/${id_proforma }`);
  }
}
