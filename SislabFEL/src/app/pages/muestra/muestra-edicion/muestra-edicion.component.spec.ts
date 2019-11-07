import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraEdicionComponent } from './muestra-edicion.component';

describe('MuestraEdicionComponent', () => {
  let component: MuestraEdicionComponent;
  let fixture: ComponentFixture<MuestraEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
