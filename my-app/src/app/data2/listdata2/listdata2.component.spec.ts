import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listdata2Component } from './listdata2.component';

describe('Listdata2Component', () => {
  let component: Listdata2Component;
  let fixture: ComponentFixture<Listdata2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listdata2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listdata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
