import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupEmployeeComponent } from './topup-employee.component';

describe('TopupEmployeeComponent', () => {
  let component: TopupEmployeeComponent;
  let fixture: ComponentFixture<TopupEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
