import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosInventarioEdicionComponent } from './movimientos-inventario-edicion.component';

describe('MovimientosInventarioEdicionComponent', () => {
  let component: MovimientosInventarioEdicionComponent;
  let fixture: ComponentFixture<MovimientosInventarioEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientosInventarioEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosInventarioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
