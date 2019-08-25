import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMetodoComponent } from './agregar-metodo.component';

describe('AgregarMetodoComponent', () => {
  let component: AgregarMetodoComponent;
  let fixture: ComponentFixture<AgregarMetodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMetodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
