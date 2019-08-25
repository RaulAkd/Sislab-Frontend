import { Personal } from './../_model/personal';
import { HOST2 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  PersonalCambio = new Subject<Personal[]>();
  url = `${HOST2}/personal`;

  constructor( private http: HttpClient) { }

  listarPersonal() {
    return this.http.get<Personal[]>(this.url);
  }

  registrarPersonal(personal: Personal) {
    return this.http.post( this.url, personal);
  }

  modificarPersonal(personal: Personal) {
    return this.http.put( this.url, personal);
  }

  // tslint:disable-next-line:variable-name
  eliminarPersonal(id_personal: string) {
    return this.http.delete<Personal>(`${this.url}/${id_personal}`);
  }
}
