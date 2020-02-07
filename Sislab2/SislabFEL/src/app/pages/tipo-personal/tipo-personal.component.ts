import { TipoPersonal } from './../../_model/tipoPersonal';
import { TipoPersonalService } from './../../_service/tipo-personal.service';
import { TipoPersonalEdicionComponent } from './tipo-personal-edicion/tipo-personal-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-tipo-personal',
  templateUrl: './tipo-personal.component.html',
  styleUrls: ['./tipo-personal.component.css']
})
export class TipoPersonalComponent implements OnInit {

  dataSource: MatTableDataSource< TipoPersonal >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_tipopersonal', 'nombre_tp', 'descr_tp', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_tipopersonal', 'nombre_tp', 'descr_tp', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private tipoPersonalService: TipoPersonalService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(tipoPersonal?: TipoPersonal) {
    // tslint:disable-next-line:prefer-const
    let tp = tipoPersonal != null ? tipoPersonal : new TipoPersonal();
    this.dialog.open(TipoPersonalEdicionComponent, { data: tp});
  }

  // tslint:disable-next-line:variable-name
  eliminarTipoPersonal(id_tipopersonal: string) {
    this.tipoPersonalService.eliminarTipoPersonal(id_tipopersonal).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.tipoPersonalService.listarTipoPersonal().subscribe(data => {
        this.tipoPersonalService.tipoPersonalCambio.next(data);
        this.notificar('Se eliminó', 'AVISO');
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
    this.tipoPersonalService.tipoPersonalCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.tipoPersonalService.listarTipoPersonal().subscribe( data => {
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
