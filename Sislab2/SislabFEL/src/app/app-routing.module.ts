import { OrdenTrabajoEComponent } from './pages/orden-trabajo-e/orden-trabajo-e.component';
import { TipoClienteEdicionComponent } from './pages/tipo-cliente/tipo-cliente-edicion/tipo-cliente-edicion.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoClienteComponent } from './pages/tipo-cliente/tipo-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClienteEdicionComponent } from './pages/cliente/cliente-edicion/cliente-edicion.component';
import { TipoServicioComponent } from './pages/tipo-servicio/tipo-servicio.component';
import { TipoServicioEdicionComponent } from './pages/tipo-servicio/tipo-servicio-edicion/tipo-servicio-edicion.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { ServicioEdicionComponent } from './pages/servicio/servicio-edicion/servicio-edicion.component';
import { MetodoComponent } from './pages/metodo/metodo.component';
import { MetodoEdicionComponent } from './pages/metodo/metodo-edicion/metodo-edicion.component';
import { UnidadComponent } from './pages/unidad/unidad.component';
import { UnidadEdicionComponent } from './pages/unidad/unidad-edicion/unidad-edicion.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { LaboratorioEdicionComponent } from './pages/laboratorio/laboratorio-edicion/laboratorio-edicion.component';
import { CargosPersonalComponent } from './pages/cargos-personal/cargos-personal.component';
import { CargosPersonalEdicionComponent } from './pages/cargos-personal/cargos-personal-edicion/cargos-personal-edicion.component';
import { TipoPersonalComponent } from './pages/tipo-personal/tipo-personal.component';
import { TipoPersonalEdicionComponent } from './pages/tipo-personal/tipo-personal-edicion/tipo-personal-edicion.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PersonalEdicionComponent } from './pages/personal/personal-edicion/personal-edicion.component';
import { ExistenciasComponent } from './pages/existencias/existencias.component';
import { ExistenciasEdicionComponent } from './pages/existencias/existencias-edicion/existencias-edicion.component';
import { EstadoProductoComponent } from './pages/estado-producto/estado-producto.component';
import { EstadoProductoEdicionComponent } from './pages/estado-producto/estado-producto-edicion/estado-producto-edicion.component';
import { ConcentracionComponent } from './pages/concentracion/concentracion.component';
import { ConcentracionEdicionComponent } from './pages/concentracion/concentracion-edicion/concentracion-edicion.component';
import { PosgiroComponent } from './pages/posgiro/posgiro.component';
import { PosgiroEdicionComponent } from './pages/posgiro/posgiro-edicion/posgiro-edicion.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { PresentacionEdicionComponent } from './pages/presentacion/presentacion-edicion/presentacion-edicion.component';
import { GradoComponent } from './pages/grado/grado.component';
import { GradoEdicionComponent } from './pages/grado/grado-edicion/grado-edicion.component';
import { UnidadMedidaComponent } from './pages/unidad-medida/unidad-medida.component';
import { UnidadMedidaEdicionComponent } from './pages/unidad-medida/unidad-medida-edicion/unidad-medida-edicion.component';
import { TipoProductoComponent } from './pages/tipo-producto/tipo-producto.component';
import { TipoProductoEdicionComponent } from './pages/tipo-producto/tipo-producto-edicion/tipo-producto-edicion.component';
import { TipoProveedorComponent } from './pages/tipo-proveedor/tipo-proveedor.component';
import { TipoProveedorEdicionComponent } from './pages/tipo-proveedor/tipo-proveedor-edicion/tipo-proveedor-edicion.component';
import { BodegaComponent } from './pages/bodega/bodega.component';
import { BodegaEdicionComponent } from './pages/bodega/bodega-edicion/bodega-edicion.component';
import { CaracteristicaComponent } from './pages/caracteristica/caracteristica.component';
import { CaracteristicaEdicionComponent } from './pages/caracteristica/caracteristica-edicion/caracteristica-edicion.component';
import { RiesgoEspecificoComponent } from './pages/riesgo-especifico/riesgo-especifico.component';
import { RiesgoEspecificoEdicionComponent } from './pages/riesgo-especifico/riesgo-especifico-edicion/riesgo-especifico-edicion.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductoEdicionComponent } from './pages/producto/producto-edicion/producto-edicion.component';
import { ProformaComponent } from './pages/proforma/proforma.component';
import { ProformaEdicionComponent } from './pages/proforma/proforma-edicion/proforma-edicion.component';
import { LoginComponent } from './pages/login/login.component';
import { GuardService } from './_service/guard.service';
import { Not403Component } from './pages/not403/not403.component';
// tslint:disable-next-line:max-line-length
import { TipoOrdenInventarioEdicionComponent } from './pages/tipo-orden-inventario/tipo-orden-inventario-edicion/tipo-orden-inventario-edicion.component';
import { MuestraEdicionComponent } from './pages/muestra/muestra-edicion/muestra-edicion.component';
import { MuestraComponent } from './pages/muestra/muestra.component';
import { OrdenTrabajoComponent } from './pages/orden-trabajo/orden-trabajo.component';
import { OrdenTrabajoEdicionComponent } from './pages/orden-trabajo/orden-trabajo-edicion/orden-trabajo-edicion.component';
import { CompraComponent } from './pages/compra/compra.component';
import { CompraEdicionComponent } from './pages/compra/compra-edicion/compra-edicion.component';
import { HidratacionComponent } from './pages/hidratacion/hidratacion.component';
import { HidratacionEdicionComponent } from './pages/hidratacion/hidratacion-edicion/hidratacion-edicion.component';
import { MovimientosInventarioComponent } from './pages/movimientos-inventario/movimientos-inventario.component';
// tslint:disable-next-line:max-line-length
import { MovimientosInventarioEdicionComponent } from './pages/movimientos-inventario/movimientos-inventario-edicion/movimientos-inventario-edicion.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { ProveedorEdicionComponent } from './pages/proveedor/proveedor-edicion/proveedor-edicion.component';
import { TipoJustificacionComponent } from './pages/tipo-justificacion/tipo-justificacion.component';
// tslint:disable-next-line:max-line-length
import { TipoJustificacionEdicionComponent } from './pages/tipo-justificacion/tipo-justificacion-edicion/tipo-justificacion-edicion.component';
import { TipoOrdenInventarioComponent } from './pages/tipo-orden-inventario/tipo-orden-inventario.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: Not403Component,
    path: 'notFound',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    component: TipoClienteComponent,
    path: 'tipoCliente',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: TipoClienteEdicionComponent
      },
      {
        path: 'edicion/:id_tipocliente',
        component: TipoClienteEdicionComponent
      }
    ]
  },

  {
    component: ClienteComponent,
    path: 'cliente',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: ClienteEdicionComponent
      },
      {
        path: 'edicion/:id_cliente',
        component: ClienteEdicionComponent
      }
    ]
  },

  {
    component: TipoServicioComponent,
    path: 'tipoServicio',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: TipoServicioEdicionComponent
      },
      {
        path: 'edicion/:id_tiposerv',
        component: TipoServicioEdicionComponent
      }
    ]
  },
  {
    component: ServicioComponent,
    path: 'servicio',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: ServicioEdicionComponent
      },
      {
        path: 'edicion/:id_servicio',
        component: ServicioEdicionComponent
      }
    ]
  },
  {
    component: MetodoComponent,
    path: 'metodo',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: MetodoEdicionComponent
      },
      {
        path: 'edicion/:id_metodo',
        component: MetodoEdicionComponent
      }
    ]
  },
  // Micro servicio 2
  {
    component: UnidadComponent,
    path: 'unidad',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: UnidadEdicionComponent
      },
      {
        path: 'edicion/:id_unidad',
        component: UnidadEdicionComponent
      }
    ]
  },
  {
    component: LaboratorioComponent,
    path: 'laboratorio',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: LaboratorioEdicionComponent
      },
      {
        path: 'edicion/:id_laboratorio',
        component: LaboratorioEdicionComponent
      }
    ]
  },
  {
    component: CargosPersonalComponent,
    path: 'cargosPersonal',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: CargosPersonalEdicionComponent
      },
      {
        path: 'edicion/:id_cargo',
        component: CargosPersonalEdicionComponent
      }
    ]
  },
  {
    component: TipoPersonalComponent,
    path: 'tipoPersonal',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: TipoPersonalEdicionComponent
      },
      {
        path: 'edicion/:id_tipopersonal',
        component: TipoPersonalEdicionComponent
      }
    ]
  }
  ,
  {
    component: PersonalComponent,
    path: 'personal',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: PersonalEdicionComponent
      },
      {
        path: 'edicion/:id_personal',
        component: PersonalEdicionComponent
      }
    ]
  },
  {
    component: MuestraComponent,
    path: 'muestra',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: MuestraEdicionComponent
      },
      {
        path: 'edicion/:id_muestra',
        component: MuestraEdicionComponent
      }
    ]
  },
  {
    component: OrdenTrabajoComponent,
    path: 'ordenTrabajo',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: OrdenTrabajoEdicionComponent
      },
      {
        path: 'edicion/:id_orden',
        component: OrdenTrabajoEdicionComponent
      }
    ]
  },
  {
    component: OrdenTrabajoEComponent,
    path: 'ordenTrabajoE',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: OrdenTrabajoEdicionComponent
      },
      {
        path: 'edicion/:id_orden',
        component: OrdenTrabajoEdicionComponent
      }
    ]
  },
  // Micro servicio 3
  {
    component: ExistenciasComponent,
    path: 'existencias',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: ExistenciasEdicionComponent
      },
      {
        path: 'edicion/:id_existencia',
        component: ExistenciasEdicionComponent
      }
    ]
  },
  {
    component: EstadoProductoComponent,
    path: 'estadoProducto',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: EstadoProductoEdicionComponent
      },
      {
        path: 'edicion/:id_estadoprod',
        component: EstadoProductoEdicionComponent
      }
    ]
  },
  {
    component: ConcentracionComponent,
    path: 'concentracion',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: ConcentracionEdicionComponent
      },
      {
        path: 'edicion/:id_concentracion',
        component: ConcentracionEdicionComponent
      }
    ]
  },
  {
    component: PosgiroComponent,
    path: 'posgiro',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: PosgiroEdicionComponent
      },
      {
        path: 'edicion/:id_posgiro',
        component: PosgiroEdicionComponent
      }
    ]
  },
  {
    component: PresentacionComponent,
    path: 'presentacion',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: PresentacionEdicionComponent
      },
      {
        path: 'edicion/:id_presentacion',
        component: PresentacionEdicionComponent
      }
    ]
  },
  {
    component: GradoComponent,
    path: 'grado',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: GradoEdicionComponent
      },
      {
        path: 'edicion/:id_grado',
        component: GradoEdicionComponent
      }
    ]
  },
  {
    component: UnidadMedidaComponent,
    path: 'unidadMedida',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: UnidadMedidaEdicionComponent
      },
      {
        path: 'edicion/:id_umedida',
        component: UnidadMedidaEdicionComponent
      }
    ]
  },
  {
    component: TipoProductoComponent,
    path: 'tipoProducto',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: TipoProductoEdicionComponent
      },
      {
        path: 'edicion/:id_tipoprod',
        component: TipoProductoEdicionComponent
      }
    ]
  },
  {
    component: TipoProveedorComponent,
    path: 'tipoProveedor',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: TipoProveedorEdicionComponent
      },
      {
        path: 'edicion/:id_tipoproveedor',
        component: TipoProveedorEdicionComponent
      }
    ]
  },
  {
    component: BodegaComponent,
    path: 'bodega',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: BodegaEdicionComponent
      },
      {
        path: 'edicion/:id_bodega',
        component: BodegaEdicionComponent
      }
    ]
  },
  {
    component: CaracteristicaComponent,
    path: 'caracteristica',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: CaracteristicaEdicionComponent
      },
      {
        path: 'edicion/:id_caracteristica',
        component: CaracteristicaEdicionComponent
      }
    ]
  },
  {
    component: RiesgoEspecificoComponent,
    path: 'riesgoEspecifico',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: RiesgoEspecificoEdicionComponent
      },
      {
        path: 'edicion/:id_riesgoespecifico',
        component: RiesgoEspecificoEdicionComponent
      }
    ]
  },
  {
    component: ProductoComponent,
    path: 'producto',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: ProductoEdicionComponent
      },
      {
        path: 'edicion/:id_producto',
        component: ProductoEdicionComponent
      }
    ]
  },
  {
    component: ProformaComponent,
    path: 'proforma',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: ProformaEdicionComponent
      },
      {
        path: 'edicion/:id_proforma',
        component: ProformaEdicionComponent
      }
    ]
  },
  {
    component: TipoOrdenInventarioComponent,
    path: 'tipoOrdenInventario',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: TipoOrdenInventarioEdicionComponent
      },
      {
        path: 'edicion/:id_tipordeninv',
        component: TipoOrdenInventarioEdicionComponent
      }
    ]
  }
  ,
  {
    component: CompraComponent,
    path: 'compra',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: CompraEdicionComponent
      },
      {
        path: 'edicion/:id_compra',
        component: CompraEdicionComponent
      }
    ]
  },
  {
    component: HidratacionComponent,
    path: 'hidratacion',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: HidratacionEdicionComponent
      },
      {
        path: 'edicion/:id_hidratacion',
        component: HidratacionEdicionComponent
      }
    ]
  },
  {
    component: MovimientosInventarioComponent,
    path: 'movimientosInventario',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: MovimientosInventarioEdicionComponent
      },
      {
        path: 'edicion/:id_movimiento',
        component: MovimientosInventarioEdicionComponent
      }
    ]
  },
  {
    component: ProveedorComponent,
    path: 'proveedor',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: ProveedorEdicionComponent
      },
      {
        path: 'edicion/:id_proveedor',
        component: ProveedorEdicionComponent
      }
    ]
  },
  {
    component: TipoJustificacionComponent,
    path: 'tipoJustificacion',
    canActivate: [GuardService],
    children: [
      {
        path: 'nuevo',
        component: TipoJustificacionEdicionComponent
      },
      {
        path: 'edicion/:id_tipojust',
        component: TipoJustificacionEdicionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
