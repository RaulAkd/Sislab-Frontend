import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadEdicionComponent } from './unidad-edicion.component';

describe('UnidadEdicionComponent', () => {
  let component: UnidadEdicionComponent;
  let fixture: ComponentFixture<UnidadEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
