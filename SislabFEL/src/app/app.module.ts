import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    ExistenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
