import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentVendorComponent } from './recent-vendor.component';

describe('RecentVendorComponent', () => {
  let component: RecentVendorComponent;
  let fixture: ComponentFixture<RecentVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
