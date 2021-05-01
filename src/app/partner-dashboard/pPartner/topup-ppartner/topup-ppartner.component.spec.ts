import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupPpartnerComponent } from './topup-ppartner.component';

describe('TopupPpartnerComponent', () => {
  let component: TopupPpartnerComponent;
  let fixture: ComponentFixture<TopupPpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupPpartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupPpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
