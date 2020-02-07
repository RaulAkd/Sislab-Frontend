import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraEdicionComponent } from './compra-edicion.component';

describe('CompraEdicionComponent', () => {
  let component: CompraEdicionComponent;
  let fixture: ComponentFixture<CompraEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
