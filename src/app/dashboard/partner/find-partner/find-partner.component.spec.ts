import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPartnerComponent } from './find-partner.component';

describe('FindPartnerComponent', () => {
  let component: FindPartnerComponent;
  let fixture: ComponentFixture<FindPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
