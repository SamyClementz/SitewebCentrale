import { TestBed } from '@angular/core/testing';

import { AppartService } from './appart.service';

describe('AppartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppartService = TestBed.get(AppartService);
    expect(service).toBeTruthy();
  });
});
