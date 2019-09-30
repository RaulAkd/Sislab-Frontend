import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProductoEdicionComponent } from './tipo-producto-edicion.component';

describe('TipoProductoEdicionComponent', () => {
  let component: TipoProductoEdicionComponent;
  let fixture: ComponentFixture<TipoProductoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProductoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProductoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
