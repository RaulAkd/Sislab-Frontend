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

const routes: Routes = [
  {
    component: TipoClienteComponent,
    path: 'tipoCliente',
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
    children: [
      {
        path: 'nuevo',
        component: CargosPersonalEdicionComponent
      },
      {
        path: 'edicion/:id_cargo',
        component: CargosPersonalComponent
      }
    ]
  },
  {
    component: TipoPersonalComponent,
    path: 'tipoPersonal',
    children: [
      {
        path: 'nuevo',
        component: TipoPersonalEdicionComponent
      },
      {
        path: 'edicion/:id_tipopersonal',
        component: TipoPersonalComponent
      }
    ]
  }
  ,
  {
    component: PersonalComponent,
    path: 'personal',
    children: [
      {
        path: 'nuevo',
        component: PersonalEdicionComponent
      },
      {
        path: 'edicion/:id_personal',
        component: PersonalComponent
      }
    ]
  },
  // Micro servicio 3
  {
    component: ExistenciasComponent,
    path: 'existencias',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
