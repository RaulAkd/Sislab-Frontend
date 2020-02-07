import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformaEdicionComponent } from './proforma-edicion.component';

describe('ProformaEdicionComponent', () => {
  let component: ProformaEdicionComponent;
  let fixture: ComponentFixture<ProformaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProformaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProformaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
