import { Proveedor } from './../../../_model/proveedor';
import { ProveedorService } from './../../../_service/proveedor.service';
import { TipoProveedor } from './../../../_model/tipoProveedor';
import { TipoProveedorService } from './../../../_service/tipo-proveedor.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-proveedor-edicion',
  templateUrl: './proveedor-edicion.component.html',
  styleUrls: ['./proveedor-edicion.component.css']
})
export class ProveedorEdicionComponent implements OnInit {

  tp: TipoProveedor[] = [];
  selected: string;
  proveedorNg: Proveedor;
  form: FormGroup;
  edicion = false;
  proveedor: Proveedor;
  datosFila = this.data;
  select = 'hiug';
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<ProveedorEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Proveedor, private route: ActivatedRoute, private proveedorService: ProveedorService, private tipoProveedorService: TipoProveedorService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('Pasado al modal');
    console.log(this.data);

    if (!this.data.id_proveedor) {
      // nuevo proveedor
      // tslint:disable-next-line:prefer-const
      let nuevoTipoProveedor = new TipoProveedor();
      this.data = new Proveedor();
      this.data.tipoProveedor = nuevoTipoProveedor;
    } else {
      // editar proveedor
      this.selected =  this.data.tipoProveedor.id_tipoproveedor;
    }
    this.tipoProveedorService.listarTipoProveedor().subscribe( lista => {
      this.tp = lista;
    });
    this.proveedor = Object.assign({} , this.data);

  }

  cancelar() {
    this.dialogRef.close();
  }

  operar(proveedorNg?: Proveedor) {
    console.log('vino a operar');
    if (this.proveedor.id_proveedor != null) {
      this.proveedor.tipoProveedor.id_tipoproveedor = this.selected;
      this.proveedorService.modificarProveedor(this.proveedor).subscribe( data => {
        this.proveedorService.listarProveedor().subscribe(proveedores => {
          this.proveedorService.ProveedorCambio.next(proveedores);
          this.notificar('Se modifico', 'Aviso');
        });
      });
    } else {
      this.proveedor.tipoProveedor.id_tipoproveedor = this.selected;
      this.proveedorService.registrarProveedor(this.proveedor).subscribe( data => {
        this.proveedorService.listarProveedor().subscribe(proveedorNuevo => {
          this.proveedorService.ProveedorCambio.next(proveedorNuevo);
          this.notificar('Se registro exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['proveedor']);
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
