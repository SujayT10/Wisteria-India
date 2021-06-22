import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEmpComponent } from './find-emp.component';

describe('FindEmpComponent', () => {
  let component: FindEmpComponent;
  let fixture: ComponentFixture<FindEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
