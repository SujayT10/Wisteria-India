import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackListedPartnerComponent } from './black-listed-partner.component';

describe('BlackListedPartnerComponent', () => {
  let component: BlackListedPartnerComponent;
  let fixture: ComponentFixture<BlackListedPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackListedPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackListedPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
