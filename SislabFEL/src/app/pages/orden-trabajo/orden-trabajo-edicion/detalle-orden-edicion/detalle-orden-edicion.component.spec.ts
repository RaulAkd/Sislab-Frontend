import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenEdicionComponent } from './detalle-orden-edicion.component';

describe('DetalleOrdenEdicionComponent', () => {
  let component: DetalleOrdenEdicionComponent;
  let fixture: ComponentFixture<DetalleOrdenEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleOrdenEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOrdenEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
