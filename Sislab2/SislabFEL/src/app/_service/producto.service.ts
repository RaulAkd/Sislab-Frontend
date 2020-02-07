import { Producto } from './../_model/producto';
import { HOST3 } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  ProductoCambio = new Subject<Producto[]>();
  url = `${HOST3}/producto`;

  constructor( private http: HttpClient) { }

  listarProducto() {
    return this.http.get<Producto[]>(this.url);
  }

  registrarProducto(producto: Producto) {
    return this.http.post( this.url, producto);
  }

  modificarProducto(producto: Producto) {
    return this.http.put( this.url, producto);
  }

  // tslint:disable-next-line:variable-name
  eliminarProducto(id_producto: string) {
    return this.http.delete<Producto>(`${this.url}/${id_producto}`);
  }
}
