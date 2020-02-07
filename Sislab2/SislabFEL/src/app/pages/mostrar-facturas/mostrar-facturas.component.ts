import { EstadoFactura } from './../../_model/estadoFactura';
import { Factura } from './../../_model/factura';
import { FacturaService } from './../../_service/factura.service';
import { Routes, RouterEvent, RouterLink, Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-mostrar-facturas',
  templateUrl: './mostrar-facturas.component.html',
  styleUrls: ['./mostrar-facturas.component.css']
})
export class MostrarFacturasComponent implements OnInit {

  selectedRowIndex = -1;
  datos: '';
  filtro: string;
  dataSource: MatTableDataSource<Factura>;
  facturas: Array<Factura>;
  // factura: Array<Factura>;
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id_factura', 'id_estado_factura', 'id_proforma'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['id_factura', 'id_estado_factura', 'id_proforma'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private facturaService: FacturaService,  public dialog: MatDialog, private snackBar: MatSnackBar) { }


  openDialog(factura?: Factura) {
    // tslint:disable-next-line:prefer-const
    let fac = factura != null ? factura : new Factura();
    // this.dialog.open(FacEdicionComponent, { data: cli});
  }

  /*mostrarFactura(factura: Factura) {
    this.dialog.open(ClienteMostrarComponent, { data: cliente});
  }*/

  // tslint:disable-next-line:variable-name
  /*eliminarCliente(id_cliente: string) {
    console.log('Eliminar');
    console.log(id_cliente);
    this.clienteService.eliminarCliente(id_cliente).subscribe(data => {
      // tslint:disable-next-line:no-shadowed-variable
      this.clienteService.listarCliente().subscribe(data => {
        this.clienteService.ClienteCambio.next(data);
        this.notificar('Se elimino', 'AVISO');
      });
    });
  }*/

  notificar(mensaje: string, accion: string) {
    console.log('Vino a modificar');
    console.log(mensaje);
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
  ngOnInit() {
    this.facturas = new Array<Factura>();
    this.facturaService.FacturaCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    console.log('Antes service');
    this.facturaService.listarFacturas().subscribe( data => {
      console.log('Datos Get Facturas');
      console.log(data);
      data.forEach(element => {
          if (element.id_estado_factura === '2') {
            element.id_estado_factura = 'Pagado';
            this.facturas.push(element);
          }
      });
      // this.factura = data;
      this.dataSource = new MatTableDataSource(this.facturas);
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

  seleccion(row: any) {
    console.log('Mensajeeeeeee');
    console.log(row);
    this.datos = row;
    this.selectedRowIndex = row.id_factura;
    console.log('Indice');
    console.log(this.selectedRowIndex);
  }
}
