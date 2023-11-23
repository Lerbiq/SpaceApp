import { TestBed } from '@angular/core/testing';

import { IotdService } from './iotd.service';

describe('IotdService', () => {
  let service: IotdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IotdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
