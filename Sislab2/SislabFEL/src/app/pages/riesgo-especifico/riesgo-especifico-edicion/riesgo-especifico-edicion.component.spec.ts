import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgoEspecificoEdicionComponent } from './riesgo-especifico-edicion.component';

describe('RiesgoEspecificoEdicionComponent', () => {
  let component: RiesgoEspecificoEdicionComponent;
  let fixture: ComponentFixture<RiesgoEspecificoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiesgoEspecificoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiesgoEspecificoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
