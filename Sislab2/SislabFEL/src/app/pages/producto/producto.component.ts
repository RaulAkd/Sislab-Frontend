import { Producto } from './../../_model/producto';
import { RiesgoEspecifico } from './../../_model/riesgoEspecifico';
import { ProductoEdicionComponent } from './producto-edicion/producto-edicion.component';
import { ProductoService } from './../../_service/producto.service';
import { Routes, RouterEvent, RouterLink,  Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  dataSource: MatTableDataSource<Producto>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_producto', 'riesgoEspecifico', 'nombre_pr', 'descr_pr', 'stockmin_pr', 'stock_pr', 'stockcrt_pr', 'iupac_pr', 'riesgo_pr', 'formula_pr', 'colorriesgo_pr', 'precio_pr', 'riesgosalud_pr', 'riesgoinflamabilidad_pr', 'riesgoreactividad_pr', 'aux_idprod', 'id_tipoprod', 'acciones'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_producto', 'riesgoEspecifico', 'nombre_pr', 'descr_pr', 'stockmin_pr', 'stock_pr', 'stockcrt_pr', 'iupac_pr', 'riesgo_pr', 'formula_pr', 'colorriesgo_pr', 'precio_pr', 'riesgosalud_pr', 'riesgoinflamabilidad_pr', 'riesgoreactividad_pr', 'aux_idprod', 'id_tipoprod', 'acciones'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private productoService: ProductoService,  public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(producto?: Producto) {
    // tslint:disable-next-line:prefer-const
    let pr = producto != null ? producto : new Producto();
    console.log('Antes de pasar');
    console.log(pr);
    this.dialog.open(ProductoEdicionComponent, { data: pr});
  }

  // tslint:disable-next-line:variable-name
  eliminarProducto(id_producto: string) {
    console.log('Eliminar');
    console.log(id_producto);
    this.productoService.eliminarProducto(id_producto).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.productoService.listarProducto().subscribe(data => {
        this.productoService.ProductoCambio.next(data);
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
    this.productoService.ProductoCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.productoService.listarProducto().subscribe( data => {
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
