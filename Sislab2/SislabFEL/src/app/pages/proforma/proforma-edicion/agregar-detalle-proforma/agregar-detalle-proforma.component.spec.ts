import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDetalleProformaComponent } from './agregar-detalle-proforma.component';

describe('AgregarDetalleProformaComponent', () => {
  let component: AgregarDetalleProformaComponent;
  let fixture: ComponentFixture<AgregarDetalleProformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDetalleProformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDetalleProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
