import { Compra } from './../../../_model/compra';
import { CompraService } from './../../../_service/compra.service';
import { ProveedorService } from './../../../_service/proveedor.service';
import { Proveedor } from './../../../_model/proveedor';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-compra-edicion',
  templateUrl: './compra-edicion.component.html',
  styleUrls: ['./compra-edicion.component.css']
})
export class CompraEdicionComponent implements OnInit {

  pv: Proveedor[] = [];
  selected: string;
  form: FormGroup;
  edicion = false;
  compra: Compra;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<CompraEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Compra, private route: ActivatedRoute, private compraService: CompraService, private proveedorService: ProveedorService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    if (!this.data.id_compra) {
      // nueva compra
      // tslint:disable-next-line:prefer-const
      let nuevoProveedor = new Proveedor();
      this.data = new Compra();
      this.data.proveedor = nuevoProveedor;
    } else {
      // editar compra
      this.selected =  this.data.proveedor.id_proveedor;
    }
    this.proveedorService.listarProveedor().subscribe( lista => {
      this.pv = lista;
    });
    this.compra = Object.assign({} , this.data);

  }

  cancelar() {
    this.dialogRef.close();
  }

  operar(compraNg?: Compra) {
    console.log('vino a operar');
    if (this.compra.id_compra != null) {
      this.compra.proveedor.id_proveedor = this.selected;
      this.compraService.modificarCompra(this.compra).subscribe( data => {
        this.compraService.listarCompra().subscribe(compras => {
          this.compraService.CompraCambio.next(compras);
          this.notificar('Se modifico', 'Aviso');
        });
      });
    } else {
      console.log('Vino a registrar');
      this.compra.proveedor.id_proveedor = this.selected;
      this.compra.fecha_co = new Date().toISOString().slice(0, 10);
      console.log(this.compra);
      console.log('Selecteeeed');
      console.log(this.selected);
      console.log(this.compra.fecha_co);
      this.compraService.registrarCompra(this.compra).subscribe( data => {
         this.compra.fecha_co = new Date(this.compra.fecha_co).toISOString().slice(0, 10);
         this.compraService.listarCompra().subscribe(compraNueva => {
          this.compraService.CompraCambio.next(compraNueva);
          this.notificar('Se registro exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['compra']);
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
