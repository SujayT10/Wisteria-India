import { TestBed } from '@angular/core/testing';

import { CommonLinksService } from './common-links.service';

describe('CommonLinksService', () => {
  let service: CommonLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
