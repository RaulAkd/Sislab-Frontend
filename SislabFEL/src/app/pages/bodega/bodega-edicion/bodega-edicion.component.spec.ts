import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaEdicionComponent } from './bodega-edicion.component';

describe('BodegaEdicionComponent', () => {
  let component: BodegaEdicionComponent;
  let fixture: ComponentFixture<BodegaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
