import { TestBed } from '@angular/core/testing';

import { QAServService } from './qaserv.service';

describe('QAServService', () => {
  let service: QAServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QAServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
