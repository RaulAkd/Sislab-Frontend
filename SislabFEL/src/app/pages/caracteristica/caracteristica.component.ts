import { Caracteristica } from './../../_model/caracteristica';
import { CaracteristicaService } from './../../_service/caracteristica.service';
import { CaracteristicaEdicionComponent } from './caracteristica-edicion/caracteristica-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-caracteristica',
  templateUrl: './caracteristica.component.html',
  styleUrls: ['./caracteristica.component.css']
})
export class CaracteristicaComponent implements OnInit {

  dataSource: MatTableDataSource< Caracteristica >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_caracteristica', 'nombre_cr', 'descr_cr', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_caracteristica', 'nombre_cr', 'descr_cr', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private caracteristicaService: CaracteristicaService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(caracteristica?: Caracteristica) {
    // tslint:disable-next-line:prefer-const
    let cr = caracteristica != null ? caracteristica : new Caracteristica();
    this.dialog.open(CaracteristicaEdicionComponent, { data: cr});
  }

  // tslint:disable-next-line:variable-name
  eliminarCaracteristica(id_caracteristica: string) {
    this.caracteristicaService.eliminarCaracteristica(id_caracteristica).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.caracteristicaService.listarCaracteristica().subscribe(data => {
        this.caracteristicaService.caracteristicaCambio.next(data);
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
    this.caracteristicaService.caracteristicaCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.caracteristicaService.listarCaracteristica().subscribe( data => {
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
