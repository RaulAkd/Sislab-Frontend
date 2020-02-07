import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoJustificacionComponent } from './tipo-justificacion.component';

describe('TipoJustificacionComponent', () => {
  let component: TipoJustificacionComponent;
  let fixture: ComponentFixture<TipoJustificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoJustificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoJustificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
