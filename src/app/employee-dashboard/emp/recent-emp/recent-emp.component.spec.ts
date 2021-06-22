import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEmpComponent } from './recent-emp.component';

describe('RecentEmpComponent', () => {
  let component: RecentEmpComponent;
  let fixture: ComponentFixture<RecentEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
