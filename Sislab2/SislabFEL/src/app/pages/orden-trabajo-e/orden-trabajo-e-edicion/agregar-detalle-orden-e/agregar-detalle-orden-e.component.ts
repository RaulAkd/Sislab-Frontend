import { element } from 'protractor';
import { Proforma } from './../../../../_model/proforma';
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
  selector: 'app-agregar-detalle-orden-e',
  templateUrl: './agregar-detalle-orden-e.component.html',
  styleUrls: ['./agregar-detalle-orden-e.component.css']
})
export class AgregarDetalleOrdenEComponent implements OnInit {

  detalleOrdenArray: Array<DetalleOrden>;
  asignadoBool = true;
  asignarPersonalBool = false;
  agregarDetalleOrdenBool = false;
  servicios: Array<Servicio>;
  serviciosAuxiliar: Array<Servicio>;
  proforma: Proforma;
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
  constructor(private dialogRef: MatDialogRef<AgregarDetalleOrdenEComponent>, @Inject(MAT_DIALOG_DATA) public data: Proforma, private router: Router, private route: ActivatedRoute, private laboratorioService: LaboratorioService, private metodoService: MetodoService, private servicioService: ServicioService, private tipoServicioService: TipoServicioService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  // tslint:disable-next-line:variable-name
  notificar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.detalleOrden = new DetalleOrden();
    this.servicios = new Array<Servicio>();
    this.detalleOrdenArray = new Array<DetalleOrden>();
    this.serviciosAuxiliar = new Array<Servicio>();
    this.proforma = Object.assign({} , this.data);

    // tslint:disable-next-line:no-shadowed-variable
    this.proforma.detalleProforma.forEach(element => {
      this.servicios.push(element.servicio);
    });
    this.dataSource = new MatTableDataSource(this.servicios);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.detalleOrden = new DetalleOrden();
    this.detalleOrden.personal = new Personal();
  }

  seleccionar(row: any) {
    this.detalleOrden = new DetalleOrden();
    this.detalleOrden.personal = new Personal();
    this.asignadoBool = false;
    this.asignarPersonalBool = true;
    let cont = -1;
    let posicion = 0;
    let auxiliar = row.id_servicio;
    // tslint:disable-next-line:no-shadowed-variable
    this.servicios.forEach(element => {
      cont++;
      if (element.id_servicio === auxiliar) {
        posicion = cont;
        auxiliar = 0;
      }
    });
    cont = -1;
    this.serviciosAuxiliar = new Array<Servicio>();
    // tslint:disable-next-line:no-shadowed-variable
    this.servicios.forEach(element => {
      cont++;
      if ( posicion !== cont ) {
        this.serviciosAuxiliar.push(element);
      }
    });
    this.servicios = this.serviciosAuxiliar;
    this.dataSource = new MatTableDataSource(this.serviciosAuxiliar);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.detalleOrden.nombreServicio = row.nombre_s;
    this.detalleOrden.id_servicio = row.id_servicio;
    this.metodosPorServicio = new Array();
    this.metodoService.listarMetodo().subscribe( data => {
      // tslint:disable-next-line:no-shadowed-variable
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

  asignarPersonal() {
    this.asignadoBool = true;
    console.log('detalle orden');
    console.log(this.detalleOrden);
    console.log('array det orden');
    console.log(this.detalleOrdenArray);
    this.detalleOrdenArray.push(this.detalleOrden);
    console.log('despues del push');
    console.log(this.detalleOrdenArray);
    // this.detalleOrden.personal.id_personal
  }

  agregarDetalleOrdenOK() {
    if (this.asignarPersonalBool === true) {
      return false;
    } else {
      return true;
    }
  }

  asignarPersonalOK() {
    if (this.asignarPersonalBool === true && this.asignadoBool === false && !(!this.detalleOrden.nombrePersonal)) {
      console.log(this.detalleOrden.nombrePersonal);
      return false;
    } else {
      return true;
    }
  }

  asignadoOK() {
    if (this.asignadoBool === true) {
      return false;
    } else {
      return true;
    }
  }
}
