import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosPersonalComponent } from './cargos-personal.component';

describe('CargosPersonalComponent', () => {
  let component: CargosPersonalComponent;
  let fixture: ComponentFixture<CargosPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargosPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
