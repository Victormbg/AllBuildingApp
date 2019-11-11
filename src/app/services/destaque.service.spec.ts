import { TestBed } from '@angular/core/testing';

import { DestaqueService } from './destaque.service';

describe('DestaqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestaqueService = TestBed.get(DestaqueService);
    expect(service).toBeTruthy();
  });
});
