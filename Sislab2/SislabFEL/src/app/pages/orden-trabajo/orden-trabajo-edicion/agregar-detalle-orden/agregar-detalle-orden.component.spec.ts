import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDetalleOrdenComponent } from './agregar-detalle-orden.component';

describe('AgregarDetalleOrdenComponent', () => {
  let component: AgregarDetalleOrdenComponent;
  let fixture: ComponentFixture<AgregarDetalleOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDetalleOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDetalleOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
