import { PresentacionEdicionComponent } from './presentacion-edicion/presentacion-edicion.component';
import { PresentacionService } from './../../_service/presentacion.service';
import { Presentacion } from './../../_model/presentacion';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  dataSource: MatTableDataSource< Presentacion >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_presentacion', 'nombre_prs', 'descr_prs', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_presentacion', 'nombre_prs', 'descr_prs', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private presentacionService: PresentacionService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(presentacion?: Presentacion) {
    // tslint:disable-next-line:prefer-const
    let pre = presentacion != null ? presentacion : new Presentacion();
    this.dialog.open(PresentacionEdicionComponent, { data: pre});
  }

  // tslint:disable-next-line:variable-name
  eliminarPresentacion(id_presentacion: string) {
    this.presentacionService.eliminarPresentacion(id_presentacion).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.presentacionService.listarPresentacion().subscribe(data => {
        this.presentacionService.presentacionCambio.next(data);
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
    this.presentacionService.presentacionCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.presentacionService.listarPresentacion().subscribe( data => {
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
