import { ConcentracionEdicionComponent } from './concentracion-edicion/concentracion-edicion.component';
import { ConcentracionService } from './../../_service/concentracion.service';
import { Concentracion } from './../../_model/concentracion';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-concentracion',
  templateUrl: './concentracion.component.html',
  styleUrls: ['./concentracion.component.css']
})
export class ConcentracionComponent implements OnInit {

  dataSource: MatTableDataSource< Concentracion >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_concentracion', 'nombre_con', 'descr_con', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_concentracion', 'nombre_con', 'descr_con', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private concentracionService: ConcentracionService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(concentracion?: Concentracion) {
    // tslint:disable-next-line:prefer-const
    let con = concentracion != null ? concentracion : new Concentracion();
    this.dialog.open(ConcentracionEdicionComponent, { data: con});
  }

  // tslint:disable-next-line:variable-name
  eliminarConcentracion(id_concentracion: string) {
    this.concentracionService.eliminarConcentracion(id_concentracion).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.concentracionService.listarConcentracion().subscribe(data => {
        this.concentracionService.concentracionCambio.next(data);
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
    this.concentracionService.concentracionCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.concentracionService.listarConcentracion().subscribe( data => {
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
