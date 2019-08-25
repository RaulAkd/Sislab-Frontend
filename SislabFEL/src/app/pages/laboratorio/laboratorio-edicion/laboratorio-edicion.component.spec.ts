import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioEdicionComponent } from './laboratorio-edicion.component';

describe('LaboratorioEdicionComponent', () => {
  let component: LaboratorioEdicionComponent;
  let fixture: ComponentFixture<LaboratorioEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorioEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
