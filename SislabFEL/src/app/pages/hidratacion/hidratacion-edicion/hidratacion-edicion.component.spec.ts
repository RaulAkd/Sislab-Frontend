import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidratacionEdicionComponent } from './hidratacion-edicion.component';

describe('HidratacionEdicionComponent', () => {
  let component: HidratacionEdicionComponent;
  let fixture: ComponentFixture<HidratacionEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidratacionEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidratacionEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
