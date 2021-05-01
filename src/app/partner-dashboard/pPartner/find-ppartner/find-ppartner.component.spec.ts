import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPpartnerComponent } from './find-ppartner.component';

describe('FindPpartnerComponent', () => {
  let component: FindPpartnerComponent;
  let fixture: ComponentFixture<FindPpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPpartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
