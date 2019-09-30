import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEdicionComponent } from './producto-edicion.component';

describe('ProductoEdicionComponent', () => {
  let component: ProductoEdicionComponent;
  let fixture: ComponentFixture<ProductoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
