import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistenciasEdicionComponent } from './existencias-edicion.component';

describe('ExistenciasEdicionComponent', () => {
  let component: ExistenciasEdicionComponent;
  let fixture: ComponentFixture<ExistenciasEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistenciasEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistenciasEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
