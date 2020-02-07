import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoEdicionComponent } from './grado-edicion.component';

describe('GradoEdicionComponent', () => {
  let component: GradoEdicionComponent;
  let fixture: ComponentFixture<GradoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
