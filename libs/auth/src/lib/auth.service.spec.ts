import { TestBed } from '@angular/core/testing';

import { AuthInitService } from './auth-init.service';

describe('AuthInitService', () => {
  let service: AuthInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
