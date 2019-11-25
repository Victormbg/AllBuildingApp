import { TestBed } from '@angular/core/testing';

import { PerfilService } from './perfil.service';

describe('PerfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilService = TestBed.get(PerfilService);
    expect(service).toBeTruthy();
  });
});
