import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidratacionComponent } from './hidratacion.component';

describe('HidratacionComponent', () => {
  let component: HidratacionComponent;
  let fixture: ComponentFixture<HidratacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidratacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidratacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
