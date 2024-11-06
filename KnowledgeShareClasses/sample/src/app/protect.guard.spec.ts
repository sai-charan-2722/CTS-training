import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { protectGuard } from './protect.guard';

describe('protectGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
