import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadMedidaEdicionComponent } from './unidad-medida-edicion.component';

describe('UnidadMedidaEdicionComponent', () => {
  let component: UnidadMedidaEdicionComponent;
  let fixture: ComponentFixture<UnidadMedidaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadMedidaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadMedidaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
