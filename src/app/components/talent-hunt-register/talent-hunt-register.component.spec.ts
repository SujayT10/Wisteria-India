import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentHuntRegisterComponent } from './talent-hunt-register.component';

describe('TalentHuntRegisterComponent', () => {
  let component: TalentHuntRegisterComponent;
  let fixture: ComponentFixture<TalentHuntRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentHuntRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentHuntRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
