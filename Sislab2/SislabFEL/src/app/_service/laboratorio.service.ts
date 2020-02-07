import { Laboratorio } from './../_model/laboratorio';
import { HOST2 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  LaboratorioCambio = new Subject<Laboratorio[]>();
  url = `${HOST2}/laboratorio`;

  constructor( private http: HttpClient) { }

  listarLaboratorio() {
    return this.http.get<Laboratorio[]>(this.url);
  }

  // tslint:disable-next-line:variable-name
  listarLaboratorioPorId(id_laboratorio: string) {
    return this.http.get<Laboratorio>(`${this.url}/${id_laboratorio}`);
  }

  registrarLaboratorio(laboratorio: Laboratorio) {
    return this.http.post( this.url, laboratorio);
  }

  modificarLaboratorio(laboratorio: Laboratorio) {
    return this.http.put( this.url, laboratorio);
  }

  // tslint:disable-next-line:variable-name
  eliminarLaboratorio(id_laboratorio: string) {
    return this.http.delete<Laboratorio>(`${this.url}/${id_laboratorio}`);
  }
}
