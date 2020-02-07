import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoProductoEdicionComponent } from './estado-producto-edicion.component';

describe('EstadoProductoEdicionComponent', () => {
  let component: EstadoProductoEdicionComponent;
  let fixture: ComponentFixture<EstadoProductoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoProductoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoProductoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
