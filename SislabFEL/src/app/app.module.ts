import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { TipoClienteComponent } from './pages/tipo-cliente/tipo-cliente.component';
import { Not403Component } from './pages/not403/not403.component';
import { TipoClienteEdicionComponent } from './pages/tipo-cliente/tipo-cliente-edicion/tipo-cliente-edicion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { AgregarMetodoComponent } from './pages/metodo/metodo-edicion/agregar-metodo/agregar-metodo.component';
import { ExistenciasComponent } from './pages/existencias/existencias.component';
import { ExistenciasEdicionComponent } from './pages/existencias/existencias-edicion/existencias-edicion.component';
import { ExistenciasMostrarComponent } from './pages/existencias/existencias-mostrar/existencias-mostrar.component';
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
import { ServerErrorsInterceptor } from './_shared/server-errors.interceptor';

import { JwtModule } from '@auth0/angular-jwt';
import { TOKEN_NAME } from './_shared/var.constant';

export function tokenGetter() {
  // tslint:disable-next-line:prefer-const
  let tk = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
  // tslint:disable-next-line:prefer-const
  let token = tk != null ? tk.access_token : '';
  // console.log(token);
  return token;
}
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    TipoClienteComponent,
    Not403Component,
    TipoClienteEdicionComponent,
    ClienteEdicionComponent,
    TipoServicioComponent,
    TipoServicioEdicionComponent,
    ServicioComponent,
    ServicioEdicionComponent,
    MetodoComponent,
    MetodoEdicionComponent,
    UnidadComponent,
    UnidadEdicionComponent,
    LaboratorioComponent,
    LaboratorioEdicionComponent,
    CargosPersonalComponent,
    CargosPersonalEdicionComponent,
    TipoPersonalComponent,
    TipoPersonalEdicionComponent,
    PersonalComponent,
    PersonalEdicionComponent,
    AgregarMetodoComponent,
    ExistenciasComponent,
    ExistenciasEdicionComponent,
    ExistenciasMostrarComponent,
    EstadoProductoComponent,
    EstadoProductoEdicionComponent,
    ConcentracionComponent,
    ConcentracionEdicionComponent,
    PosgiroComponent,
    PosgiroEdicionComponent,
    PresentacionComponent,
    PresentacionEdicionComponent,
    GradoComponent,
    GradoEdicionComponent,
    UnidadMedidaComponent,
    UnidadMedidaEdicionComponent,
    TipoProductoComponent,
    TipoProductoEdicionComponent,
    TipoProveedorComponent,
    TipoProveedorEdicionComponent,
    BodegaComponent,
    BodegaEdicionComponent,
    CaracteristicaComponent,
    CaracteristicaEdicionComponent,
    RiesgoEspecificoComponent,
    RiesgoEspecificoEdicionComponent,
    ProductoComponent,
    ProductoEdicionComponent,
    ProformaComponent,
    ProformaEdicionComponent,
    ProformaEdicionComponent,
    LoginComponent
  ],
  entryComponents: [
    TipoClienteEdicionComponent,
    ClienteEdicionComponent,
    ServicioEdicionComponent,
    MetodoEdicionComponent,
    UnidadEdicionComponent,
    LaboratorioEdicionComponent,
    PersonalEdicionComponent,
    AgregarMetodoComponent,
    ExistenciasEdicionComponent,
    ExistenciasMostrarComponent,
    ExistenciasComponent,
    EstadoProductoEdicionComponent,
    PosgiroEdicionComponent,
    PresentacionEdicionComponent,
    GradoEdicionComponent,
    UnidadMedidaEdicionComponent,
    TipoProductoEdicionComponent,
    TipoProveedorEdicionComponent,
    BodegaEdicionComponent,
    CaracteristicaEdicionComponent,
    RiesgoEspecificoEdicionComponent,
    ProductoEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line:object-literal-shorthand
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8082'],
        // blacklistedRoutes: ['localhost:8082/login/enviarCorreo']
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorsInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
