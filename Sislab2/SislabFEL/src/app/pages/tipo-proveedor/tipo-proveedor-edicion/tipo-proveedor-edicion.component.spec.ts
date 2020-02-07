import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProveedorEdicionComponent } from './tipo-proveedor-edicion.component';

describe('TipoProveedorEdicionComponent', () => {
  let component: TipoProveedorEdicionComponent;
  let fixture: ComponentFixture<TipoProveedorEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProveedorEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProveedorEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
