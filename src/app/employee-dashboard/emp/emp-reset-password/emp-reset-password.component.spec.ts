import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpResetPasswordComponent } from './emp-reset-password.component';

describe('EmpResetPasswordComponent', () => {
  let component: EmpResetPasswordComponent;
  let fixture: ComponentFixture<EmpResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
