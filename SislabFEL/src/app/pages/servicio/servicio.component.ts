import { Servicio } from './../../_model/servicio';
import { TipoServicio } from './../../_model/tipoServicio';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { ServicioService } from './../../_service/servicio.service';
import { TipoServicioService } from './../../_service/tipo-servicio.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { ServicioEdicionComponent } from './servicio-edicion/servicio-edicion.component';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  dataSource: MatTableDataSource<Servicio>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_servicio', 'id_laboratorio', 'tipoServicio', 'nombre_s', 'descr_s', 'aux_id_servicio', 'precio_s', 'acreditado', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_servicio', 'id_laboratorio', 'tipoServicio', 'nombre_s', 'descr_s', 'aux_id_servicio', 'precio_s', 'acreditado', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private servicioService: ServicioService, private tipoServicioService: TipoServicioService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(servicio?: Servicio) {
    // tslint:disable-next-line:prefer-const
    let serv = servicio != null ? servicio : new Servicio();
    console.log('Antes de pasar');
    console.log(serv);
    this.dialog.open(ServicioEdicionComponent, { data: serv});
  }

  // tslint:disable-next-line:variable-name
  eliminarServicio(id_servicio: string) {
    console.log('Eliminar');
    console.log(id_servicio);
    this.servicioService.eliminarServicio(id_servicio).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.servicioService.listarServicio().subscribe(data => {
        this.servicioService.ServicioCambio.next(data);
        this.notificar('Se elimino', 'AVISO');
      });
    });
  }

  notificar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.servicioService.ServicioCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.servicioService.listarServicio().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
