import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaEdicionComponent } from './caracteristica-edicion.component';

describe('CaracteristicaEdicionComponent', () => {
  let component: CaracteristicaEdicionComponent;
  let fixture: ComponentFixture<CaracteristicaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracteristicaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
