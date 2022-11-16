import { TestBed } from '@angular/core/testing';

import { Pizza.ServiceService } from './pizza.service';

describe('Pizza.ServiceService', () => {
  let service: Pizza.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pizza.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
