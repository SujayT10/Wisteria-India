import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupMinusEmployeeComponent } from './topup-minus-employee.component';

describe('TopupMinusEmployeeComponent', () => {
  let component: TopupMinusEmployeeComponent;
  let fixture: ComponentFixture<TopupMinusEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupMinusEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupMinusEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
