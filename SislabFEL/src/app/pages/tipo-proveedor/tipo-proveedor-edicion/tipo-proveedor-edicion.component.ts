import { TipoProveedor } from './../../../_model/tipoProveedor';
import { TipoProveedorService } from './../../../_service/tipo-proveedor.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tipo-proveedor-edicion',
  templateUrl: './tipo-proveedor-edicion.component.html',
  styleUrls: ['./tipo-proveedor-edicion.component.css']
})
export class TipoProveedorEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  tipoProveedor: TipoProveedor;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<TipoProveedorEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: TipoProveedor, private route: ActivatedRoute, private tipoProveedorService: TipoProveedorService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.tipoProveedor = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.tipoProveedor.id_tipoproveedor  != null) {
      this.tipoProveedorService.modificarTipoProveedor(this.tipoProveedor).subscribe( data => {
        this.tipoProveedorService.listarTipoProveedor().subscribe(tiposProveedor => {
          this.tipoProveedorService.tipoProveedorCambio.next(tiposProveedor);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.tipoProveedorService.registrarTipoProveedor(this.tipoProveedor).subscribe( data => {
        this.tipoProveedorService.listarTipoProveedor().subscribe(tipoProveedorNuevo => {
          this.tipoProveedorService.tipoProveedorCambio.next(tipoProveedorNuevo);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['tipoProveedor']);
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
