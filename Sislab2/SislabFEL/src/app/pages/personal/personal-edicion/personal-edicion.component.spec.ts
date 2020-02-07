import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEdicionComponent } from './personal-edicion.component';

describe('PersonalEdicionComponent', () => {
  let component: PersonalEdicionComponent;
  let fixture: ComponentFixture<PersonalEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
