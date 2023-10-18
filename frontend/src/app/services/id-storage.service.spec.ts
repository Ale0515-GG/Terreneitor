import { TestBed } from '@angular/core/testing';

import { IdStorageService } from './id-storage.service';

describe('IdStorageService', () => {
  let service: IdStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
