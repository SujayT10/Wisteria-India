import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePpartnerComponent } from './manage-ppartner.component';

describe('ManagePpartnerComponent', () => {
  let component: ManagePpartnerComponent;
  let fixture: ComponentFixture<ManagePpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePpartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
