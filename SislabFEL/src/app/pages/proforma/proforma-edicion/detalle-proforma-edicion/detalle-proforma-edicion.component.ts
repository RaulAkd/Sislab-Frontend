import { LaboratorioService } from './../../../../_service/laboratorio.service';
import { DetalleProforma } from './../../../../_model/detalle-proforma';
import { Servicio } from './../../../../_model/servicio';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Metodo } from '../../../../_model/metodo';
import { MetodoService } from '../../../../_service/metodo.service';

@Component({
  selector: 'app-detalle-proforma-edicion',
  templateUrl: './detalle-proforma-edicion.component.html',
  styleUrls: ['./detalle-proforma-edicion.component.css']
})
export class DetalleProformaEdicionComponent implements OnInit {

  metodosPorServicio: Array<Metodo>;
  nombreLaboratorio: string;
  // tslint:disable-next-line:max-line-length
  constructor(private dialogRef: MatDialogRef<DetalleProformaEdicionComponent>, @Inject(MAT_DIALOG_DATA) public data: DetalleProforma, private metodoService: MetodoService, private laboratorioService: LaboratorioService) { }

  ngOnInit() {
    console.log(this.data);
    this.metodosPorServicio = new Array();
    this.metodoService.listarMetodo().subscribe( metodos => {
      metodos.forEach(element => {
        if ( element.servicio.id_servicio === this.data.servicio.id_servicio) {
          this.metodosPorServicio.push(element);
        }
      });
    });
    this.laboratorioService.listarLaboratorioPorId(this.data.id_laboratorio).subscribe ( laboratorio => {
      this.nombreLaboratorio = laboratorio.nombre_l;
      console.log(this.nombreLaboratorio);
    });

  }

}
