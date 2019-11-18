import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProformaEdicionComponent } from './detalle-proforma-edicion.component';

describe('DetalleProformaEdicionComponent', () => {
  let component: DetalleProformaEdicionComponent;
  let fixture: ComponentFixture<DetalleProformaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleProformaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleProformaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
