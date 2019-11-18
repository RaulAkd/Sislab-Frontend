import { DetalleProforma } from './../../../../_model/detalle-proforma';
import { LaboratorioService } from './../../../../_service/laboratorio.service';
import { TipoServicioService } from './../../../../_service/tipo-servicio.service';
import { ServicioService } from './../../../../_service/servicio.service';
import { TipoServicio } from './../../../../_model/tipoServicio';
import { Servicio } from './../../../../_model/servicio';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { Laboratorio } from '../../../../_model/laboratorio';
import { Metodo } from '../../../../_model/metodo';

@Component({
  selector: 'app-agregar-detalle-proforma',
  templateUrl: './agregar-detalle-proforma.component.html',
  styleUrls: ['./agregar-detalle-proforma.component.css']
})
export class AgregarDetalleProformaComponent implements OnInit {

  detalleProforma: DetalleProforma;
  nombreLaboratorio: string;
  nombreServicio: '';
  idServicio: string;
  laboratorio: '';
  precio: '';
  cantidad: '';
  totalServicio: '';
  total: number;
  dataSource: MatTableDataSource<Servicio>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_servicio', 'nombre_s', 'id_laboratorio', 'nombreLaboratorio', 'accion'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_servicio', 'nombre_s', 'id_laboratorio', 'nombreLaboratorio', 'accion'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private laboratorioService: LaboratorioService, private servicioService: ServicioService, private tipoServicioService: TipoServicioService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  // tslint:disable-next-line:variable-name
  notificar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.servicioService.ServicioCambio.subscribe(data => {
      data.forEach(element => {
        this.laboratorioService.listarLaboratorioPorId( element.id_laboratorio).subscribe ( laboratorio => {
          element.nombreLaboratorio = laboratorio.nombre_l;
        });
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.servicioService.listarServicio().subscribe( data => {
      data.forEach(element => {
        this.laboratorioService.listarLaboratorioPorId( element.id_laboratorio).subscribe ( laboratorio => {
          element.nombreLaboratorio = laboratorio.nombre_l;
        });
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // tslint:disable-next-line:prefer-const
    this.detalleProforma = new DetalleProforma();
    this.detalleProforma.servicio = new Servicio();
    this.detalleProforma.metodo = new Metodo();
  }

  seleccionar(row: any) {
    console.log('seleccion fila');
    console.log(row);

    this.detalleProforma.servicio.nombre_s = row.nombre_s;
    this.detalleProforma.servicio.id_servicio = row.id_servicio;
    this.detalleProforma.id_laboratorio = row.id_laboratorio;
    this.detalleProforma.nombreLaboratorio = row.nombreLaboratorio;
    this.detalleProforma.valorunitario_po = row.precio_s;
    this.detalleProforma.metodo.id_metodo = '1';
    this.laboratorioService.listarLaboratorioPorId(this.detalleProforma.id_laboratorio).subscribe( data => {
      console.log(data);
      this.nombreLaboratorio = data.nombre_l;
    });
  }

  calcular(cantidad: string) {
    // tslint:disable-next-line:prefer-const
    this.total = +cantidad * +this.detalleProforma.valorunitario_po;
    console.log('este es el total');
    console.log(this.total);
    this.detalleProforma.totalservicio_po = +this.total;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
