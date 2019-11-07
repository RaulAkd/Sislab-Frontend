import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorEdicionComponent } from './proveedor-edicion.component';

describe('ProveedorEdicionComponent', () => {
  let component: ProveedorEdicionComponent;
  let fixture: ComponentFixture<ProveedorEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
