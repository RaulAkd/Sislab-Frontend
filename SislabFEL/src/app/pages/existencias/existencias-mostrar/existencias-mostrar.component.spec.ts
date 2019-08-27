import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistenciasMostrarComponent } from './existencias-mostrar.component';

describe('ExistenciasMostrarComponent', () => {
  let component: ExistenciasMostrarComponent;
  let fixture: ComponentFixture<ExistenciasMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistenciasMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistenciasMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
