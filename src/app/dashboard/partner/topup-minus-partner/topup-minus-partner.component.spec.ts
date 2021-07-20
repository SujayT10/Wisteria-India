import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupMinusPartnerComponent } from './topup-minus-partner.component';

describe('TopupMinusPartnerComponent', () => {
  let component: TopupMinusPartnerComponent;
  let fixture: ComponentFixture<TopupMinusPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupMinusPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupMinusPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
