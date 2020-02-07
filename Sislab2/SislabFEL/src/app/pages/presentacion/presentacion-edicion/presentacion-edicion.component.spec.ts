import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionEdicionComponent } from './presentacion-edicion.component';

describe('PresentacionEdicionComponent', () => {
  let component: PresentacionEdicionComponent;
  let fixture: ComponentFixture<PresentacionEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
