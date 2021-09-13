import { TestBed } from '@angular/core/testing';

import { ChatDAOService } from './chat-dao.service';

describe('ChatDAOService', () => {
  let service: ChatDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
