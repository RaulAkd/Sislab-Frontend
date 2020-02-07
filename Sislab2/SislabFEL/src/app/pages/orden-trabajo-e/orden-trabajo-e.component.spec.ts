import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoEComponent } from './orden-trabajo-e.component';

describe('OrdenTrabajoEComponent', () => {
  let component: OrdenTrabajoEComponent;
  let fixture: ComponentFixture<OrdenTrabajoEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenTrabajoEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTrabajoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
