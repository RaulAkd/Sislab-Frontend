import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoEEdicionComponent } from './orden-trabajo-e-edicion.component';

describe('OrdenTrabajoEEdicionComponent', () => {
  let component: OrdenTrabajoEEdicionComponent;
  let fixture: ComponentFixture<OrdenTrabajoEEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenTrabajoEEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTrabajoEEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
