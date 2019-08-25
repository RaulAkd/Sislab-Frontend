import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoEdicionComponent } from './metodo-edicion.component';

describe('MetodoEdicionComponent', () => {
  let component: MetodoEdicionComponent;
  let fixture: ComponentFixture<MetodoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
