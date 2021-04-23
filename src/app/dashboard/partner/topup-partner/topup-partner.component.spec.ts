import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupPartnerComponent } from './topup-partner.component';

describe('TopupPartnerComponent', () => {
  let component: TopupPartnerComponent;
  let fixture: ComponentFixture<TopupPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
