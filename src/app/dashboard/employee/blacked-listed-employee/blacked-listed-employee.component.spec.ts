import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackedListedEmployeeComponent } from './blacked-listed-employee.component';

describe('BlackedListedEmployeeComponent', () => {
  let component: BlackedListedEmployeeComponent;
  let fixture: ComponentFixture<BlackedListedEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackedListedEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackedListedEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
