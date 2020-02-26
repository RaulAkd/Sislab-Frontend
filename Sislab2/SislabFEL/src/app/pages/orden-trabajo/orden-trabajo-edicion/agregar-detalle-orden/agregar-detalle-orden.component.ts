import { OrdenTrabajo } from './../../../../_model/ordenTrabajo';
import { DetalleOrden } from './../../../../_model/detalle-orden';
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
import { MetodoService } from '../../../../_service/metodo.service';
import { MetodoComponent } from '../../../metodo/metodo.component';
import { Personal } from '../../../../_model/personal';
import { ListaPersonalComponent } from '../../../personal/lista-personal/lista-personal.component';

@Component({
  selector: 'app-agregar-detalle-orden',
  templateUrl: './agregar-detalle-orden.component.html',
  styleUrls: ['./agregar-detalle-orden.component.css']
})
export class AgregarDetalleOrdenComponent implements OnInit {

  personal: Personal;
  detalleOrden: DetalleOrden;
  metodosPorServicio: Array<Metodo>;
  selected: string;
  total: number;
  dataSource: MatTableDataSource<Servicio>;
  seleccionPersonal = false;
  displayedColumns = ['id_servicio', 'nombre_s', 'nombreLaboratorio', 'accion'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_servicio', 'nombre_s', 'nombreLaboratorio', 'accion'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private laboratorioService: LaboratorioService, private metodoService: MetodoService, private servicioService: ServicioService, private tipoServicioService: TipoServicioService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

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
    this.detalleOrden = new DetalleOrden();
    // this.detalleOrden.servicio = new Servicio();
    // this.detalleOrden.metodo = new Metodo();
    this.detalleOrden.personal = new Personal();
    // this.detalleOrden.personal.id_personal = '1';
  }

  seleccionar(row: any) {
    console.log('seleccion fila');
    console.log(row);

    // this.detalleProforma.servicio.nombre_s = row.nombre_s;
   // this.detalleOrden.id_detalleorden = '1';
    this.detalleOrden.nombreServicio = row.nombre_s;
    this.detalleOrden.id_servicio = row.id_servicio;
    // this.detalleOrden.id_laboratorio = row.id_laboratorio;
    // this.detalleProforma.nombreLaboratorio = row.nombreLaboratorio;
    // this.detalleProforma.valorunitario_po = row.precio_s;
    this.metodosPorServicio = new Array();
    this.metodoService.listarMetodo().subscribe( data => {
      data.forEach(element => {
        if ( element.servicio.id_servicio === this.detalleOrden.id_servicio) {
          this.metodosPorServicio.push(element);
        }
      });
    });
  }

  buscarPersonal(parametro?: string) {
    // tslint:disable-next-line:prefer-const
    if (parametro != null) {
      const dialogRef = this.dialog.open(ListaPersonalComponent, { data: parametro});
    } else {
        const dialogRef = this.dialog.open(ListaPersonalComponent);
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.seleccionPersonal = true;
          }
          console.log('The dialog was closed');
          this.personal = result;
          console.log(this.personal);
          this.detalleOrden.personal.id_personal = this.personal.id_personal;
          this.detalleOrden.nombrePersonal = this.personal.nombres_pe;
          });
        }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
