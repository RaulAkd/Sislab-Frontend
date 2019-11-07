import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoEdicionComponent } from './orden-trabajo-edicion.component';

describe('OrdenTrabajoEdicionComponent', () => {
  let component: OrdenTrabajoEdicionComponent;
  let fixture: ComponentFixture<OrdenTrabajoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenTrabajoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTrabajoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
