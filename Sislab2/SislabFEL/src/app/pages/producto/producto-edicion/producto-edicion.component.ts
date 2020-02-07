import { ProductoService } from './../../../_service/producto.service';
import { Producto } from './../../../_model/producto';
import { RiesgoEspecificoService } from './../../../_service/riesgo-especifico.service';
import { RiesgoEspecifico } from './../../../_model/riesgoEspecifico';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-producto-edicion',
  templateUrl: './producto-edicion.component.html',
  styleUrls: ['./producto-edicion.component.css']
})
export class ProductoEdicionComponent implements OnInit {

  re: RiesgoEspecifico[] = [];
  selected: string;
  form: FormGroup;
  edicion = false;
  producto: Producto;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<ProductoEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Producto, private route: ActivatedRoute, private productoService: ProductoService, private riesgoEspecificoService: RiesgoEspecificoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('Estos son los datos');
    console.log(this.data);
    if (!this.data.id_producto) {
      // nuevo cliente
      // tslint:disable-next-line:prefer-const
      let nuevoRiesgoEspecifico = new RiesgoEspecifico();
      this.data = new Producto();
      this.data.riesgoEspecifico = nuevoRiesgoEspecifico;
    } else {
      // editar cliente
      this.selected =  this.data.riesgoEspecifico.id_riesgoespecifico;
    }
    this.riesgoEspecificoService.listarRiesgosEspecifico().subscribe( lista => {
      this.re = lista;
    });
    this.producto = Object.assign({} , this.data);
  }

  cancelar() {
    this.dialogRef.close();
  }

  operar(productoNg?: Producto) {
    console.log('vino a operar');
    if (this.producto.id_producto != null) {
      this.producto.riesgoEspecifico.id_riesgoespecifico = this.selected;
      this.productoService.modificarProducto(this.producto).subscribe( data => {
        this.productoService.listarProducto().subscribe(productos => {
          this.productoService.ProductoCambio.next(productos);
          this.notificar('Se modificó', 'Aviso');
        });
      });
    } else {
      console.log('Vino a registrar');
      this.producto.riesgoEspecifico.id_riesgoespecifico = this.selected;
      console.log(this.producto);
      console.log('Selecteeeed');
      console.log(this.selected);
      this.productoService.registrarProducto(this.producto).subscribe( data => {
        this.productoService.listarProducto().subscribe(productoNuevo => {
          this.productoService.ProductoCambio.next(productoNuevo);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['producto']);
    this.dialogRef.close();
  }

  notificar(mensaje: string, accion: string) {
    console.log('Vino a modificar');
    console.log(mensaje);
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
}
