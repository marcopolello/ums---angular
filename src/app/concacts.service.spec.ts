import { TestBed } from '@angular/core/testing';

import { ConcactsService } from './concacts.service';

describe('ConcactsService', () => {
  let service: ConcactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
