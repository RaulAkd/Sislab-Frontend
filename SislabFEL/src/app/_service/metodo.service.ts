import { Metodo } from './../_model/metodo';
import { HOST } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetodoService {

  MetodoCambio = new Subject<Metodo[]>();
  url = `${HOST}/metodo`;

  constructor( private http: HttpClient) { }

  listarMetodo() {
    return this.http.get<Metodo[]>(this.url);
  }

  registrarMetodo(metodo: Metodo) {
    return this.http.post( this.url, metodo);
  }

  modificarMetodo(metodo: Metodo) {
    return this.http.put( this.url, metodo);
  }

  // tslint:disable-next-line:variable-name
  eliminarMetodo(id_metodo: string) {
    return this.http.delete<Metodo>(`${this.url}/${id_metodo}`);
  }
}
