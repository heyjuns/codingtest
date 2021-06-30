import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuaempatComponent } from './duaempat.component';

describe('DuaempatComponent', () => {
  let component: DuaempatComponent;
  let fixture: ComponentFixture<DuaempatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuaempatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuaempatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
