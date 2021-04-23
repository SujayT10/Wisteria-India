import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPartnerComponent } from './recent-partner.component';

describe('RecentPartnerComponent', () => {
  let component: RecentPartnerComponent;
  let fixture: ComponentFixture<RecentPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
