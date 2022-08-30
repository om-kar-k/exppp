import { TestBed } from '@angular/core/testing';

import { NodalServiceService } from './nodal-service.service';

describe('NodalServiceService', () => {
  let service: NodalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
