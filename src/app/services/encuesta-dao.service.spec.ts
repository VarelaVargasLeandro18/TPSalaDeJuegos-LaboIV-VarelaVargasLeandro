import { TestBed } from '@angular/core/testing';

import { EncuestaDAOService } from './encuesta-dao.service';

describe('EncuestaDAOService', () => {
  let service: EncuestaDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestaDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
