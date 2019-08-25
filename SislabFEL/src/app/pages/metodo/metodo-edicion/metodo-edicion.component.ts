import { MetodoService } from './../../../_service/metodo.service';
import { Metodo } from './../../../_model/metodo';
import { ServicioService } from './../../../_service/servicio.service';
import { Servicio } from './../../../_model/servicio';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { AgregarMetodoComponent } from './agregar-metodo/agregar-metodo.component';

@Component({
  selector: 'app-metodo-edicion',
  templateUrl: './metodo-edicion.component.html',
  styleUrls: ['./metodo-edicion.component.css']
})
export class MetodoEdicionComponent implements OnInit {

  serv: Servicio[] = [];
  selected: string;
  form: FormGroup;
  edicion = false;
  metodo: Metodo;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<MetodoEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Metodo, public dialog: MatDialog, private route: ActivatedRoute, private metodoService: MetodoService, private servicioService: ServicioService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('Estos son los datos');
    console.log(this.data);
    if (!this.data.id_metodo) {
      // nuevo cliente
      // tslint:disable-next-line:prefer-const
      let nuevoServicio = new Servicio();
      this.data = new Metodo();
      this.data.servicio = nuevoServicio;
    } else {
      // editar cliente
      this.selected =  this.data.servicio.id_servicio;
    }
    this.servicioService.listarServicio().subscribe( lista => {
      this.serv = lista;
    });
    this.metodo = Object.assign({} , this.data);

  }

  cancelar() {
    this.dialogRef.close();
  }

  operar(metodoNg?: Metodo) {
    console.log('vino a operar');
    if (this.metodo.id_metodo != null) {
      this.metodo.servicio.id_servicio = this.selected;
      this.metodoService.modificarMetodo(this.metodo).subscribe( data => {
        this.metodoService.listarMetodo().subscribe(metodos => {
          this.metodoService.MetodoCambio.next(metodos);
          this.notificar('Se modifico', 'Aviso');
        });
      });
    } else {
      console.log('Vino a registrar');
      this.metodo.servicio.id_servicio = this.selected;
      console.log(this.metodo);
      console.log('Selecteeeed');
      console.log(this.selected);
      this.metodoService.registrarMetodo(this.metodo).subscribe( data => {
        this.metodoService.listarMetodo().subscribe(metodoNuevo => {
          this.metodoService.MetodoCambio.next(metodoNuevo);
          this.notificar('Se registro exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['metodo']);
    this.dialogRef.close();
  }

  agregarDetalle() {
    this.dialog.open(AgregarMetodoComponent, { });
  }
  notificar(mensaje: string, accion: string) {
    console.log('Vino a modificar');
    console.log(mensaje);
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
}
