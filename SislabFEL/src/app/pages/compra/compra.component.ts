import { Compra } from './../../_model/compra';
import { CompraEdicionComponent } from './compra-edicion/compra-edicion.component';
import { CompraService } from './../../_service/compra.service';
import { Unidad } from './../../_model/unidad';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  dataSource: MatTableDataSource<Compra>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_compra', 'id_unidad', 'proveedor', 'monto_co', 'descr_compra', 'documento_co', 'auxidcompra', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_compra', 'id_unidad', 'proveedor', 'monto_co', 'descr_compra', 'documento_co', 'auxidcompra', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private compraService: CompraService,  public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(compra?: Compra) {
    // tslint:disable-next-line:prefer-const
    let comp = compra != null ? compra : new Compra();
    this.dialog.open(CompraEdicionComponent, { data: comp});
  }

  // tslint:disable-next-line:variable-name
  eliminarCompra(id_compra: string) {
    this.compraService.eliminarCompra(id_compra).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.compraService.listarCompra().subscribe(data => {
        this.compraService.CompraCambio.next(data);
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
    this.compraService.CompraCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.compraService.listarCompra().subscribe( data => {
      data.forEach(element => {
        if (element.fecha_co != null) {
          element.fecha_co = new Date(element.fecha_co).toISOString().slice(0, 10);
        }
      });
      console.log(data);
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
