import { TestBed } from '@angular/core/testing';

import { BuscaService } from './busca.service';

describe('BuscaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscaService = TestBed.get(BuscaService);
    expect(service).toBeTruthy();
  });
});
