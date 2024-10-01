import { TestBed } from '@angular/core/testing';

import { ExteranlHttpService } from './exteranl-http.service';

describe('ExteranlHttpService', () => {
  let service: ExteranlHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExteranlHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
