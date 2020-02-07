import { MuestraEdicionComponent } from './muestra-edicion/muestra-edicion.component';
import { MuestraService } from './../../_service/muestra.service';
import { Muestra } from './../../_model/muestra';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {

  dataSource: MatTableDataSource<Muestra>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_muestra', 'codigo_m_cliente', 'fecha_toma_m', 'tipo_m', 'origen_m', 'tipoenvase_m', 'preservante_m', 'tipopreservante_m', 'refrigeracion_m', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_muestra', 'codigo_m_cliente', 'fecha_toma_m', 'tipo_m', 'origen_m', 'tipoenvase_m', 'preservante_m', 'tipopreservante_m', 'refrigeracion_m', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private muestraService: MuestraService,  public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(muestra?: Muestra) {
    // tslint:disable-next-line:prefer-const
    let mtr = muestra != null ? muestra : new Muestra();
    console.log('Antes de pasar');
    console.log(mtr);
    this.dialog.open(MuestraEdicionComponent, { data: mtr});
  }

  // tslint:disable-next-line:variable-name
  eliminarMuestra(id_muestra: string) {
    console.log('Eliminar');
    console.log(id_muestra);
    this.muestraService.eliminarMuestra(id_muestra).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.muestraService.listarMuestra().subscribe(data => {
        this.muestraService.muestraCambio.next(data);
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
    this.muestraService.muestraCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.muestraService.listarMuestra().subscribe( data => {
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
