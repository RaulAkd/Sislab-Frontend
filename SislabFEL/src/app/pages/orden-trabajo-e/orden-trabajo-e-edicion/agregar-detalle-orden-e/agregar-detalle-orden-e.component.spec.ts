import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDetalleOrdenEComponent } from './agregar-detalle-orden-e.component';

describe('AgregarDetalleOrdenEComponent', () => {
  let component: AgregarDetalleOrdenEComponent;
  let fixture: ComponentFixture<AgregarDetalleOrdenEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDetalleOrdenEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDetalleOrdenEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
