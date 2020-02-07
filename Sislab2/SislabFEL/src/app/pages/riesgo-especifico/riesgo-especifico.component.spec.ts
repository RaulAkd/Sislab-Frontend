import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgoEspecificoComponent } from './riesgo-especifico.component';

describe('RiesgoEspecificoComponent', () => {
  let component: RiesgoEspecificoComponent;
  let fixture: ComponentFixture<RiesgoEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiesgoEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiesgoEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
