import { Grado } from './../_model/grado';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  gradoCambio = new Subject<Grado[]>();
  url = `${HOST3}/grado`;

  constructor( private http: HttpClient) { }

  listarGrado() {
    return this.http.get<Grado[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarGrado(grado: Grado) {
    return this.http.post( this.url, grado);
  }

  modificarGrado(grado: Grado) {
    return this.http.put( this.url, grado);
  }

  // tslint:disable-next-line:variable-name
  eliminarGrado(id_grado: string) {
    return this.http.delete<Grado>(`${this.url}/${id_grado}`);
  }
}
