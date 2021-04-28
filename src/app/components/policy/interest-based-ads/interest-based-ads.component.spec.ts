import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestBasedAdsComponent } from './interest-based-ads.component';

describe('InterestBasedAdsComponent', () => {
  let component: InterestBasedAdsComponent;
  let fixture: ComponentFixture<InterestBasedAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestBasedAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestBasedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
