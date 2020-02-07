import { Unidad } from './../../../_model/unidad';
import { UnidadService } from './../../../_service/unidad.service';
import { Laboratorio } from './../../../_model/laboratorio';
import { LaboratorioService } from './../../../_service/laboratorio.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-laboratorio-edicion',
  templateUrl: './laboratorio-edicion.component.html',
  styleUrls: ['./laboratorio-edicion.component.css']
})
export class LaboratorioEdicionComponent implements OnInit {

  uni: Unidad[] = [];
  selected: string;
  form: FormGroup;
  edicion = false;
  laboratorio: Laboratorio;
  datosFila = this.data;
  // tslint:disable-next-line:max-line-length
  constructor( private dialogRef: MatDialogRef<LaboratorioEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: Laboratorio, private route: ActivatedRoute, private laboratorioService: LaboratorioService, private unidadService: UnidadService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('Estos son los datos');
    console.log(this.data);
    if (!this.data.id_laboratorio) {
      // nuevo cliente
      // tslint:disable-next-line:prefer-const
      let nuevaUnidad = new Unidad();
      this.data = new Laboratorio();
      this.data.unidad = nuevaUnidad;
    } else {
      // editar cliente
      this.selected =  this.data.unidad.id_unidad;
    }
    this.unidadService.listarUnidad().subscribe( lista => {
      this.uni = lista;
    });
    this.laboratorio = Object.assign({} , this.data);
  }

  cancelar() {
    this.dialogRef.close();
  }

  operar(laboratorioNg?: Laboratorio) {
    console.log('vino a operar');
    if (this.laboratorio.id_laboratorio != null) {
      this.laboratorio.unidad.id_unidad = this.selected;
      this.laboratorioService.modificarLaboratorio(this.laboratorio).subscribe( data => {
        this.laboratorioService.listarLaboratorio().subscribe(laboratorios => {
          this.laboratorioService.LaboratorioCambio.next(laboratorios);
          this.notificar('Se modificó', 'Aviso');
        });
      });
    } else {
      console.log('Vino a registrar');
      this.laboratorio.unidad.id_unidad = this.selected;
      console.log(this.laboratorio);
      console.log('Selecteeeed');
      console.log(this.selected);
      this.laboratorioService.registrarLaboratorio(this.laboratorio).subscribe( data => {
        this.laboratorioService.listarLaboratorio().subscribe(laboratorioNuevo => {
          this.laboratorioService.LaboratorioCambio.next(laboratorioNuevo);
          this.notificar('Se registró exitosamente', 'Aviso');
        });
      });
    }
    this.router.navigate(['laboratorio']);
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
