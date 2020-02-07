import { CargosPersonalEdicionComponent } from './cargos-personal-edicion/cargos-personal-edicion.component';
import { CargosPersonalService } from './../../_service/cargospersonal.service';
import { CargosPersonal } from './../../_model/cargospersonal';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-cargos-personal',
  templateUrl: './cargos-personal.component.html',
  styleUrls: ['./cargos-personal.component.css']
})
export class CargosPersonalComponent implements OnInit {

  dataSource: MatTableDataSource< CargosPersonal >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_cargo', 'nombre_cp', 'descr_cp', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_cargo', 'nombre_cp', 'descr_cp', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private cargosPersonalService: CargosPersonalService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(cargosPersonal?: CargosPersonal) {
    // tslint:disable-next-line:prefer-const
    let cp = cargosPersonal != null ? cargosPersonal : new CargosPersonal();
    this.dialog.open(CargosPersonalEdicionComponent, { data: cp});
  }

  // tslint:disable-next-line:variable-name
  eliminarCargosPersonal(id_cargo: string) {
    this.cargosPersonalService.eliminarCargosPersonal(id_cargo).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.cargosPersonalService.listarCargosPersonal().subscribe(data => {
        this.cargosPersonalService.cargosPersonalCambio.next(data);
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
    this.cargosPersonalService.cargosPersonalCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.cargosPersonalService.listarCargosPersonal().subscribe( data => {
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
