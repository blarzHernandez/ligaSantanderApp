import { TestBed, inject } from '@angular/core/testing';

import { RankingServiceService } from './ranking-service.service';

describe('RankingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RankingServiceService]
    });
  });

  it('should ...', inject([RankingServiceService], (service: RankingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
