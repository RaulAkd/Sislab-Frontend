import { TipoProductoService } from './../../../_service/tipo-producto.service';
import { TipoProducto } from './../../../_model/tipoProducto';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tipo-producto-edicion',
  templateUrl: './tipo-producto-edicion.component.html',
  styleUrls: ['./tipo-producto-edicion.component.css']
})
export class TipoProductoEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  tipoProducto: TipoProducto;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<TipoProductoEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: TipoProducto, private route: ActivatedRoute, private tipoProductoService: TipoProductoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.tipoProducto = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.tipoProducto.id_tipoprod != null) {
      this.tipoProductoService.modificarTipoProducto(this.tipoProducto).subscribe( data => {
        this.tipoProductoService.listarTipoProducto().subscribe(tiposProducto => {
          this.tipoProductoService.tipoProductoCambio.next(tiposProducto);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.tipoProductoService.registrarTipoProducto(this.tipoProducto).subscribe( data => {
        this.tipoProductoService.listarTipoProducto().subscribe(tipoProductoNuevo => {
          this.tipoProductoService.tipoProductoCambio.next(tipoProductoNuevo);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['tipoProducto']);
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
