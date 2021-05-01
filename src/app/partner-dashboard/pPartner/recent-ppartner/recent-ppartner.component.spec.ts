import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPpartnerComponent } from './recent-ppartner.component';

describe('RecentPpartnerComponent', () => {
  let component: RecentPpartnerComponent;
  let fixture: ComponentFixture<RecentPpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPpartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
