import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEmployeeComponent } from './recent-employee.component';

describe('RecentEmployeeComponent', () => {
  let component: RecentEmployeeComponent;
  let fixture: ComponentFixture<RecentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
