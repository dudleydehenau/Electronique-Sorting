import { TestBed } from '@angular/core/testing';

import { SupabaseCRUDService } from './supabaseCRUD.service';

describe('SupabaseService', () => {
  let service: SupabaseCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
