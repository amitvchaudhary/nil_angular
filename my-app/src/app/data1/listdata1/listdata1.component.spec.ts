import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listdata1Component } from './listdata1.component';

describe('Listdata1Component', () => {
  let component: Listdata1Component;
  let fixture: ComponentFixture<Listdata1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listdata1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listdata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
