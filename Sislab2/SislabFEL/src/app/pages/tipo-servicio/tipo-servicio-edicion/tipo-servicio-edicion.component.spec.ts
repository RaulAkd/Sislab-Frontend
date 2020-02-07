import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicioEdicionComponent } from './tipo-servicio-edicion.component';

describe('TipoServicioEdicionComponent', () => {
  let component: TipoServicioEdicionComponent;
  let fixture: ComponentFixture<TipoServicioEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicioEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
