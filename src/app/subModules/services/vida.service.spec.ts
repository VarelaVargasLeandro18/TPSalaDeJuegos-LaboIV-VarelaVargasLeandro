import { TestBed } from '@angular/core/testing';

import { VidaService } from './vida.service';

describe('VidaService', () => {
  let service: VidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
