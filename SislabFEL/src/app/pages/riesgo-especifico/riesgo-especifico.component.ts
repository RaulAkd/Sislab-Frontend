import { RiesgoEspecifico } from './../../_model/riesgoEspecifico';
import { RiesgoEspecificoService } from './../../_service/riesgo-especifico.service';
import { RiesgoEspecificoEdicionComponent } from './riesgo-especifico-edicion/riesgo-especifico-edicion.component';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-riesgo-especifico',
  templateUrl: './riesgo-especifico.component.html',
  styleUrls: ['./riesgo-especifico.component.css']
})
export class RiesgoEspecificoComponent implements OnInit {

  dataSource: MatTableDataSource< RiesgoEspecifico >;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_riesgoespecifico', 'nombre_re', 'descr_re', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_riesgoespecifico', 'nombre_re', 'descr_re', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private riesgoEspecificoService: RiesgoEspecificoService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(riesgoEspecifico?: RiesgoEspecifico) {
    // tslint:disable-next-line:prefer-const
    let re = riesgoEspecifico != null ? riesgoEspecifico : new RiesgoEspecifico();
    this.dialog.open(RiesgoEspecificoEdicionComponent, { data: re});
  }

  // tslint:disable-next-line:variable-name
  eliminarRiesgoEspecifico(id_riesgoespecifico: string) {
    this.riesgoEspecificoService.eliminarRiesgoEspecifico(id_riesgoespecifico).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.riesgoEspecificoService.listarRiesgosEspecifico().subscribe(data => {
        this.riesgoEspecificoService.riesgoEspecificoCambio.next(data);
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
    this.riesgoEspecificoService.riesgoEspecificoCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.riesgoEspecificoService.listarRiesgosEspecifico().subscribe( data => {
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
