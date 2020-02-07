import { LaboratorioService } from './../../_service/laboratorio.service';
import { LaboratorioEdicionComponent } from './laboratorio-edicion/laboratorio-edicion.component';
import { Unidad } from './../../_model/unidad';
import { Laboratorio } from './../../_model/laboratorio';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {
  dataSource: MatTableDataSource<Laboratorio>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_laboratorio', 'unidad', 'nombre_l', 'leyenda_prof_l', 'centrocosto_l', 'responsable_l', 'email_l', 'direccion_l', 'telefono_l', 'fax_l', 'leyenda_ot_l', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_laboratorio', 'unidad', 'nombre_l', 'leyenda_prof_l', 'centrocosto_l', 'responsable_l', 'email_l', 'direccion_l', 'telefono_l', 'fax_l', 'leyenda_ot_l', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private laboratorioService: LaboratorioService,  public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(laboratorio?: Laboratorio) {
    // tslint:disable-next-line:prefer-const
    let lab = laboratorio != null ? laboratorio : new Laboratorio();
    console.log('Antes de pasar');
    console.log(lab);
    this.dialog.open(LaboratorioEdicionComponent, { data: lab});
  }

  // tslint:disable-next-line:variable-name
  eliminarLaboratorio(id_laboratorio: string) {
    console.log('Eliminar');
    console.log(id_laboratorio);
    this.laboratorioService.eliminarLaboratorio(id_laboratorio).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.laboratorioService.listarLaboratorio().subscribe(data => {
        this.laboratorioService.LaboratorioCambio.next(data);
        this.notificar('Se eliminó', 'AVISO');
      });
    });
  }

  notificar(mensaje: string, accion: string) {
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.laboratorioService.LaboratorioCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.laboratorioService.listarLaboratorio().subscribe( data => {
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
