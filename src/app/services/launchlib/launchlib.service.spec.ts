import { TestBed } from '@angular/core/testing';

import { LaunchlibService } from './launchlib.service';

describe('LaunchlibService', () => {
  let service: LaunchlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
