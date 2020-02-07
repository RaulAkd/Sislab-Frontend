import { TipoServicio } from './../../_model/tipoServicio';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { TipoClienteService } from './../../_service/tipo-cliente.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { TipoServicioEdicionComponent } from './tipo-servicio-edicion/tipo-servicio-edicion.component';
import { TipoServicioService } from '../../_service/tipo-servicio.service';

@Component({
  selector: 'app-tipo-servicio',
  templateUrl: './tipo-servicio.component.html',
  styleUrls: ['./tipo-servicio.component.css']
})
export class TipoServicioComponent implements OnInit {

  dataSource: MatTableDataSource<TipoServicio>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_tiposerv', 'nombre_ts', 'descr_ts', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_tiposerv', 'nombre_ts', 'descr_ts', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private tipoServicioService: TipoServicioService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(tipoServicio?: TipoServicio) {
    // tslint:disable-next-line:prefer-const
    let ts = tipoServicio != null ? tipoServicio : new TipoServicio();
    this.dialog.open(TipoServicioEdicionComponent, { data: ts});
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoServicio(id_tiposerv: string) {
    this.tipoServicioService.eliminarTipoServicio(id_tiposerv).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.tipoServicioService.listarTipoServicio().subscribe(data => {
        this.tipoServicioService.tipoServicioCambio.next(data);
        this.notificar('Se elimino', 'AVISO');
      });
    });
  }

  notificar(mensaje: string, accion: string) {
    console.log('Vino a modificar');
    console.log(mensaje);
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.tipoServicioService.tipoServicioCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.tipoServicioService.listarTipoServicio().subscribe( data => {
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
