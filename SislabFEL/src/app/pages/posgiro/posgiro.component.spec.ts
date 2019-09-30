import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosgiroComponent } from './posgiro.component';

describe('PosgiroComponent', () => {
  let component: PosgiroComponent;
  let fixture: ComponentFixture<PosgiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosgiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosgiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
