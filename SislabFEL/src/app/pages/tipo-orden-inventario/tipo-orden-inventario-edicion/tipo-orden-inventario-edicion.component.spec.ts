import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOrdenInventarioEdicionComponent } from './tipo-orden-inventario-edicion.component';

describe('TipoOrdenInventarioEdicionComponent', () => {
  let component: TipoOrdenInventarioEdicionComponent;
  let fixture: ComponentFixture<TipoOrdenInventarioEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoOrdenInventarioEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOrdenInventarioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
