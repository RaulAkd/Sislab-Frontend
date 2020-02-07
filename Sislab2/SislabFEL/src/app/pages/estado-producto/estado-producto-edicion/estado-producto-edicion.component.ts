import { EstadoProducto } from './../../../_model/estadoProducto';
import { EstadoProductoService } from './../../../_service/estado-producto.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-estado-producto-edicion',
  templateUrl: './estado-producto-edicion.component.html',
  styleUrls: ['./estado-producto-edicion.component.css']
})
export class EstadoProductoEdicionComponent implements OnInit {

  form: FormGroup;
  edicion = false;
  estadoProducto: EstadoProducto;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<EstadoProductoEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: EstadoProducto, private route: ActivatedRoute, private estadoProductoService: EstadoProductoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
      this.estadoProducto = Object.assign({} , this.data);
    }

  cancelar() {
    this.dialogRef.close();
  }

  operar() {
    console.log('vino a operar');
    // Editar
    if (this.estadoProducto.id_estadoprod != null) {
      this.estadoProductoService.modificarEstadoProducto(this.estadoProducto).subscribe( data => {
        this.estadoProductoService.listarEstadoProducto().subscribe(estadosProducto => {
          this.estadoProductoService.estadoProductoCambio.next(estadosProducto);
          this.notificar('Se modifico', 'Aviso');
        });
      }); // Nuevo
    } else {
      console.log('Vino a else');
      this.estadoProductoService.registrarEstadoProducto(this.estadoProducto).subscribe( data => {
        this.estadoProductoService.listarEstadoProducto().subscribe(estadoProductoNuevo => {
          this.estadoProductoService.estadoProductoCambio.next(estadoProductoNuevo);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['estadoProducto']);
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
