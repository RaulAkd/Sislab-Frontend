import { ClienteService } from './../../../_service/cliente.service';
import { ProformaService } from './../../../_service/proforma.service';
import { Proforma } from './../../../_model/proforma';
import { FacturaService } from './../../../_service/factura.service';
import { Factura } from './../../../_model/factura';
import { AgregarDetalleOrdenEComponent } from './agregar-detalle-orden-e/agregar-detalle-orden-e.component';
// import { DetalleOrdenEdicionComponent } from './detalle-orden-edicion/detalle-orden-edicion.component';
import { OrdenTrabajoService } from './../../../_service/orden-trabajo.service';
import { OrdenTrabajo } from './../../../_model/ordenTrabajo';
import { DetalleOrden } from './../../../_model/detalle-orden';
import { DetalleMetodo } from './../../../_model/detalleMetodo';
import { Cliente } from './../../../_model/cliente';
import { ListaClienteComponent } from './../../cliente/lista-cliente/lista-cliente.component';
import { ClienteComponent } from './../../cliente/cliente.component';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatTableDataSource, MatPaginator, MatSort, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { TipoCliente } from '../../../_model/tipoCliente';
import { Router } from '@angular/router';
import { TOKEN_NAME } from 'src/app/_shared/var.constant';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Personal } from '../../../_model/personal';
import { MostrarFacturasComponent } from '../../mostrar-facturas/mostrar-facturas.component';

@Component({
  selector: 'app-orden-trabajo-e-edicion',
  templateUrl: './orden-trabajo-e-edicion.component.html',
  styleUrls: ['./orden-trabajo-e-edicion.component.css']
})
export class OrdenTrabajoEEdicionComponent implements OnInit {

  cliente: Cliente;
  factura: Factura;
  proforma: Proforma;
  ordenTrabajo: OrdenTrabajo;
  orden: OrdenTrabajo;
  detalleOrden: DetalleOrden;
  dataDetalleOrden: Array<DetalleOrden>;
  seleccionFactura = false;
  errorOrden = true;
  telefonoCliente: string;
  cedulaCliente: string;
  subtotal = 0;
  subtotalIva = 0;
  nuevaOrden = true;
  editarCliente = false;

  dataSource: MatTableDataSource<DetalleOrden>;

  // tslint:disable-next-line:max-line-length
  displayedColumns = ['nombreServicio', 'nombrePersonal', 'horas_trabajo', 'fecha_inicio_analisis', 'fecha_fin_analisis'];
  // tslint:disable-next-line:max-line-length
  displayedColumnsData = ['nombreServicio', 'nombrePersonal', 'horas_trabajo', 'fecha_inicio_analisis', 'fecha_fin_analisis'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // tslint:disable-next-line:max-line-length
  constructor(private dialogRef: MatDialogRef<ListaClienteComponent>, @Inject(MAT_DIALOG_DATA) public data: OrdenTrabajo, public dialog: MatDialog, private ordenService: OrdenTrabajoService, private clienteService: ClienteService, private facturaService: FacturaService, private proformaService: ProformaService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.detalleOrden = new DetalleOrden();
    this.dataDetalleOrden = new Array();
    this.cliente = new Cliente();
    this.cliente.tipoCliente = new TipoCliente();
    this.detalleOrden.personal = new Personal();
    this.orden = new OrdenTrabajo();
    // this.orden.id_cliente = new Cliente();
    this.dataSource = new MatTableDataSource(this.dataDetalleOrden);
//    this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (!this.data.id_orden) {
      // nueva proforma
      this.dataSource = new MatTableDataSource(this.dataDetalleOrden);
      // this.dataSource = new MatTableDataSource(this.dataDetalleProforma);
      this.orden.fechaorden_ot = new Date().toISOString().slice(0, 10);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.nuevaOrden = false;
      console.log('editar');
      // editar proforma
      this.editarCliente = true;
      this.seleccionFactura = true;
      this.ordenService.listarOrdenPorId(this.data.id_orden).subscribe( data => {
        console.log(data);
        this.cliente.id_cliente = data.id_cliente;
        this.orden.fechaorden_ot = new Date().toISOString().slice(0, 10);
        /*this.cliente.nombre_cl = data.cliente.nombre_cl;
        this.cliente.direccion_cl = data.cliente.direccion_cl;
        this.cliente.telefono_cl = data.cliente.telefono_cl;
        this.cliente.tipoCliente.iva_tcl = data.cliente.tipoCliente.iva_tcl;*/
        /* this.orden.fechaorden_ot = new Date(data.fechaorden_ot).toISOString().slice(0, 10);
        this.cliente.ruc_cl = data.cliente.ruc_cl;
        this.cliente.cedula = data.cliente.cedula; */
        this.data.detalleOrden.forEach(element => {
          this.detalleOrden = element;
          this.dataDetalleOrden.push(this.detalleOrden);
        });
        // this.dataDetalleOrden = this.data.DetalleOrden;
        // this.dataSource = new MatTableDataSource(this.dataDetalleProforma);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this.subtotal = this.data.subtotal_po;
        // this.subtotalIva = (this.subtotal * this.cliente.tipoCliente.iva_tcl) / 100;
        // this.proforma.total_po = this.data.total_po;
      });
    }
  }

  buscarFacturas(parametro?: string) {
    this.proforma = new Proforma();
    this.proforma.cliente = new Cliente();
    // tslint:disable-next-line:prefer-const
    if (parametro != null) {
      const dialogRef = this.dialog.open(MostrarFacturasComponent, { data: parametro});
    } else {
      const dialogRef = this.dialog.open(MostrarFacturasComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.seleccionFactura = true;
        }
        console.log('The dialog was closed');
        // this.proforma = result.proforma;
        this.proformaService.listarProformaPorId(result.id_proforma).subscribe( data => {
          console.log('LA proforma idididiid');
          console.log(data);
          this.proforma = data;
          this.factura = result;
          this.cliente = this.proforma.cliente;
          console.log(this.cliente);
          console.log(this.factura);
        });
      });
    }
  }

  agregarDetalle() {
    const dialogRef = this.dialog.open(AgregarDetalleOrdenEComponent, {data: this.proforma});
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'false') {
        return;
      }
      console.log('EL detealle proforma');
      console.log(result);
      // this.dataDetalleOrden.push(result);
      this.dataDetalleOrden = result;
      // probar
      this.dataDetalleOrden.forEach(element => {
        element.fecha_fin_analisis = new Date(element.fecha_fin_analisis);
      });
      this.dataSource = new MatTableDataSource(this.dataDetalleOrden);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.errorOrden = false;
    });
  }

  ingresoCliente() {
      if (this.seleccionFactura === true  ) {
      return false;
    } else {
      return true;
    }
  }

  ingresoDatos() {
    if (this.seleccionFactura === true && this.errorOrden === false) {
      return false;
    } else {
      return true;
    }
  }

  consultaCliente() {
      if (this.cliente === null) {
        return false;
      } else {
        return true;
      }
  }

  guardarOrden() {
    this.orden.id_cliente = this.cliente.id_cliente;
    // this.proforma.total_po = this.detalleProforma.totalservicio_po;
    this.orden.estado_ot = 'Pendiente';

    if (!this.data.id_orden) {
      // nueva proforma
      // Para generar id_compuesto
      const helper = new JwtHelperService();
      // tslint:disable-next-line:prefer-const
      let token = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
      const decodedToken = helper.decodeToken(token.access_token);
      this.orden.id_ti = decodedToken.user_name;
      this.orden.tipo_ot = 'Externa';
      console.log('Guardar nueva proforma');
      // this.orden.fechaorden_ot = new Date().toISOString().slice(0, 10);
      this.orden.detalleOrden = this.dataDetalleOrden;
      console.log('Proforma a guardar');
      console.log(this.orden);
      this.ordenService.registrarOrdenTrabajo(this.orden).subscribe( data => {
        this.ordenService.listarOrdenTrabajo().subscribe(ordenes => {
          this.ordenService.ordenTrabajoCambio.next(ordenes);
          this.notificar('Se registro', 'Aviso');
        });
      });
    } else {
      // editar proforma
      /* console.log('Editar proforma');
      this.proforma.detalleProforma = this.dataDetalleProforma;
      console.log('Proforma a guardar');
      console.log(this.proforma);
      this.proforma.id_proforma = this.data.id_proforma;
      this.proformaService.modificarProforma(this.proforma).subscribe( data => {
        this.proformaService.listarProforma().subscribe(proformas => {
          this.proformaService.proformaCambio.next(proformas);
          this.notificar('Se registro', 'Aviso');
        });
      });*/
    }
    this.dialogRef.close();
  }

  notificar(mensaje: string, accion: string) {
    console.log('Vino a modificar');
    console.log(mensaje);
    this.snackBar.open(mensaje, accion, {
      duration: 2000,
    });
  }
}
