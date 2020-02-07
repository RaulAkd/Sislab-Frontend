import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoProductoComponent } from './estado-producto.component';

describe('EstadoProductoComponent', () => {
  let component: EstadoProductoComponent;
  let fixture: ComponentFixture<EstadoProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
