import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPaymetOptionComponent } from './emp-paymet-option.component';

describe('EmpPaymetOptionComponent', () => {
  let component: EmpPaymetOptionComponent;
  let fixture: ComponentFixture<EmpPaymetOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPaymetOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPaymetOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
