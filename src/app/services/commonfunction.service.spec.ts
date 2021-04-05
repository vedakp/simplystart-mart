import { TestBed } from '@angular/core/testing';

import { CommonfunctionService } from './commonfunction.service';

describe('CommonfunctionService', () => {
  let service: CommonfunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonfunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
