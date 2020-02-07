import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOrdenInventarioComponent } from './tipo-orden-inventario.component';

describe('TipoOrdenInventarioComponent', () => {
  let component: TipoOrdenInventarioComponent;
  let fixture: ComponentFixture<TipoOrdenInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoOrdenInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOrdenInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
