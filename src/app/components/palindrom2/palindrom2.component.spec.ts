import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Palindrom2Component } from './palindrom2.component';

describe('Palindrom2Component', () => {
  let component: Palindrom2Component;
  let fixture: ComponentFixture<Palindrom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Palindrom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Palindrom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
