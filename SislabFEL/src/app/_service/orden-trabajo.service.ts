import { OrdenTrabajo } from './../_model/ordenTrabajo';
import { HOST2 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class OrdenTrabajoService {

    ordenTrabajoCambio = new Subject<OrdenTrabajo[]>();
    url = `${HOST2}/ordenTrabajo`;

    constructor( private http: HttpClient) { }

    listarOrdenTrabajo() {
      return this.http.get<OrdenTrabajo[]>(this.url);
    }

    // tslint:disable-next-line:variable-name
    listarOrdenPorId(id_orden: string) {
      return this.http.get<OrdenTrabajo>(`${this.url}/${id_orden}`);
    }

    registrarOrdenTrabajo(ordenTrabajo: OrdenTrabajo) {
      return this.http.post( this.url, ordenTrabajo);
    }

    modificarOrdenTrabajo(ordenTrabajo: OrdenTrabajo) {
      return this.http.put( this.url, ordenTrabajo);
    }

    // tslint:disable-next-line:variable-name
    eliminarOrdenTrabajo(id_orden: string) {
      return this.http.delete<OrdenTrabajo>(`${this.url}/${id_orden}`);
    }
  }
