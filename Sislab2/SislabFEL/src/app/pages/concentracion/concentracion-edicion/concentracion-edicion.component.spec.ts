import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentracionEdicionComponent } from './concentracion-edicion.component';

describe('ConcentracionEdicionComponent', () => {
  let component: ConcentracionEdicionComponent;
  let fixture: ComponentFixture<ConcentracionEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcentracionEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentracionEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
