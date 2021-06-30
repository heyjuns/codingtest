import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalTestComponent } from './logical-test.component';

describe('LogicalTestComponent', () => {
  let component: LogicalTestComponent;
  let fixture: ComponentFixture<LogicalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicalTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
