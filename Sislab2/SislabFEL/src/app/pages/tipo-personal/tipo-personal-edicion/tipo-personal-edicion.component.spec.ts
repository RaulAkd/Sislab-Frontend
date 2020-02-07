import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPersonalEdicionComponent } from './tipo-personal-edicion.component';

describe('TipoPersonalEdicionComponent', () => {
  let component: TipoPersonalEdicionComponent;
  let fixture: ComponentFixture<TipoPersonalEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPersonalEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPersonalEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
