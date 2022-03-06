import { TestBed } from '@angular/core/testing';

import { CenterMatrixService } from './center-matrix.service';

describe('CenterMatrixService', () => {
  let service: CenterMatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterMatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
