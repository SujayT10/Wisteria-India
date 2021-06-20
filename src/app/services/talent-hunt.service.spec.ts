import { TestBed } from '@angular/core/testing';

import { TalentHuntService } from './talent-hunt.service';

describe('TalentHuntService', () => {
  let service: TalentHuntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentHuntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
