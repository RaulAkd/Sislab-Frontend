import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosgiroEdicionComponent } from './posgiro-edicion.component';

describe('PosgiroEdicionComponent', () => {
  let component: PosgiroEdicionComponent;
  let fixture: ComponentFixture<PosgiroEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosgiroEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosgiroEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
