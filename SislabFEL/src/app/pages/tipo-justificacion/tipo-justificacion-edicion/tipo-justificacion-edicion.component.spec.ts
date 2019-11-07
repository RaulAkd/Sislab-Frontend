import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoJustificacionEdicionComponent } from './tipo-justificacion-edicion.component';

describe('TipoJustificacionEdicionComponent', () => {
  let component: TipoJustificacionEdicionComponent;
  let fixture: ComponentFixture<TipoJustificacionEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoJustificacionEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoJustificacionEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
