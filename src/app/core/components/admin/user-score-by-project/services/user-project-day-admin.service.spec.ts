import { TestBed } from '@angular/core/testing';

import { UserProjectDayAdminService } from './user-project-day-admin.service';

describe('UserProjectDayAdminService', () => {
  let service: UserProjectDayAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProjectDayAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
