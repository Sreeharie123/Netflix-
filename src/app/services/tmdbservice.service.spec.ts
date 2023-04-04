import { TestBed } from '@angular/core/testing';

import { TMDBServiceService } from './tmdbservice.service';

describe('TMDBServiceService', () => {
  let service: TMDBServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TMDBServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
