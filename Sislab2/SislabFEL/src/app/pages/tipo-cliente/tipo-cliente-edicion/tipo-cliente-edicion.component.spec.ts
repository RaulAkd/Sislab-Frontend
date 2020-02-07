import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoClienteEdicionComponent } from './tipo-cliente-edicion.component';

describe('TipoClienteEdicionComponent', () => {
  let component: TipoClienteEdicionComponent;
  let fixture: ComponentFixture<TipoClienteEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoClienteEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoClienteEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
