import { Proforma } from './../../_model/proforma';
import { ProformaService } from './../../_service/proforma.service';
import { DetalleProforma } from './../../_model/detalle-proforma';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { ProformaEdicionComponent } from './proforma-edicion/proforma-edicion.component';

@Component({
  selector: 'app-proforma',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.css']
})
export class ProformaComponent implements OnInit {

  dataSource: MatTableDataSource<Proforma>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_proforma', 'cliente', 'subtotal_po', 'iva_po', 'total_po', 'fecha', 'estado_po', 'auxid_proforma', 'representante_po', 'obser_po', 'motivo_estadopo', 'id_usuario', 'fecha_ptarjeta', 'codigo_autoriza', 'id_emisor', 'tarjeta', 'obser_trj', 'codigo_resultado', 'codigo_operacion', 'codigo_plam', 'codigo_cuota', 'procesoweb_po', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_proforma', 'cliente', 'subtotal_po', 'iva_po', 'total_po', 'fecha', 'estado_po', 'auxid_proforma', 'representante_po', 'obser_po', 'motivo_estadopo', 'id_usuario', 'fecha_ptarjeta', 'codigo_autoriza', 'id_emisor', 'tarjeta', 'obser_trj', 'codigo_resultado', 'codigo_operacion', 'codigo_plam', 'codigo_cuota', 'procesoweb_po', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private proformaService: ProformaService,  public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(proforma?: Proforma) {
    // tslint:disable-next-line:prefer-const
    let pro = proforma != null ? proforma : new Proforma();
    console.log('Antes de pasar');
    console.log(pro);
    this.dialog.open(ProformaEdicionComponent, { data: pro});
  }

  // tslint:disable-next-line:variable-name
  eliminarMetodo(id_proforma: string) {
    console.log('Eliminar');
    console.log(id_proforma);
    this.proformaService.eliminarProforma(id_proforma).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.proformaService.listarProforma().subscribe(data => {
        this.proformaService.proformaCambio.next(data);
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
    this.proformaService.proformaCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.proformaService.listarProforma().subscribe( data => {
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
