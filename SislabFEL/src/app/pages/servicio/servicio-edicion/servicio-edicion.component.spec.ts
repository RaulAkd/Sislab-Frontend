import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioEdicionComponent } from './servicio-edicion.component';

describe('ServicioEdicionComponent', () => {
  let component: ServicioEdicionComponent;
  let fixture: ComponentFixture<ServicioEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
