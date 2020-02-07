import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosPersonalEdicionComponent } from './cargos-personal-edicion.component';

describe('CargosPersonalEdicionComponent', () => {
  let component: CargosPersonalEdicionComponent;
  let fixture: ComponentFixture<CargosPersonalEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargosPersonalEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosPersonalEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
