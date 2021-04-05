import { TestBed } from '@angular/core/testing';

import { CommondataService } from './commondata.service';

describe('CommondataService', () => {
  let service: CommondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
