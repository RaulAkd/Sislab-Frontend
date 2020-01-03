import { Hidratacion } from './../../_model/hidratacion';
import { HidratacionService } from './../../_service/hidratacion.service';
import { HidratacionEdicionComponent } from './hidratacion-edicion/hidratacion-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-hidratacion',
  templateUrl: './hidratacion.component.html',
  styleUrls: ['./hidratacion.component.css']
})
export class HidratacionComponent implements OnInit {

  dataSource: MatTableDataSource< Hidratacion >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_hidratacion', 'nombre_hi', 'descr_hi', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_hidratacion', 'nombre_hi', 'descr_hi', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private hidratacionService: HidratacionService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(hidratacion?: Hidratacion) {
    // tslint:disable-next-line:prefer-const
    let hid = hidratacion != null ? hidratacion : new Hidratacion();
    this.dialog.open(HidratacionEdicionComponent, { data: hid});
  }

  // tslint:disable-next-line:variable-name
  eliminarHidratacion(id_hidratacion: string) {
    this.hidratacionService.eliminarHidratacion(id_hidratacion).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.hidratacionService.listarHidratacion().subscribe(data => {
        this.hidratacionService.hidratacionCambio.next(data);
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
    this.hidratacionService.hidratacionCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.hidratacionService.listarHidratacion().subscribe( data => {
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
