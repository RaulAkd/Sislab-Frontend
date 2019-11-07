import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMostrarComponent } from './cliente-mostrar.component';

describe('ClienteMostrarComponent', () => {
  let component: ClienteMostrarComponent;
  let fixture: ComponentFixture<ClienteMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
