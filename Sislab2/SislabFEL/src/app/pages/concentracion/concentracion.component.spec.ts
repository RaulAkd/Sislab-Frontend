import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentracionComponent } from './concentracion.component';

describe('ConcentracionComponent', () => {
  let component: ConcentracionComponent;
  let fixture: ComponentFixture<ConcentracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcentracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
