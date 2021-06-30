import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFinderComponent } from './phone-finder.component';

describe('PhoneFinderComponent', () => {
  let component: PhoneFinderComponent;
  let fixture: ComponentFixture<PhoneFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
