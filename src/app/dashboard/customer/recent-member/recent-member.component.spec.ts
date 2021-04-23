import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMemberComponent } from './recent-member.component';

describe('RecentMemberComponent', () => {
  let component: RecentMemberComponent;
  let fixture: ComponentFixture<RecentMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
