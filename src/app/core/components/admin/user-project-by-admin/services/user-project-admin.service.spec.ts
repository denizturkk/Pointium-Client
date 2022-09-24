import { TestBed } from '@angular/core/testing';

import { UserProjectAdminService } from './user-project-admin.service';

describe('UserProjectAdminService', () => {
  let service: UserProjectAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProjectAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
