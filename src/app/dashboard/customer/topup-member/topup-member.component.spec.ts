import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupMemberComponent } from './topup-member.component';

describe('TopupMemberComponent', () => {
  let component: TopupMemberComponent;
  let fixture: ComponentFixture<TopupMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
