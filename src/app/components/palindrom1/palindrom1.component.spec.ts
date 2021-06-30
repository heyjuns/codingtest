import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Palindrom1Component } from './palindrom1.component';

describe('Palindrom1Component', () => {
  let component: Palindrom1Component;
  let fixture: ComponentFixture<Palindrom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Palindrom1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Palindrom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
