import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Palindrom3Component } from './palindrom3.component';

describe('Palindrom3Component', () => {
  let component: Palindrom3Component;
  let fixture: ComponentFixture<Palindrom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Palindrom3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Palindrom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
