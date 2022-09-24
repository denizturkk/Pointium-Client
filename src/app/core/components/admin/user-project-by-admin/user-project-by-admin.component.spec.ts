import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectByAdminComponent } from './user-project-by-admin.component';

describe('UserProjectByAdminComponent', () => {
  let component: UserProjectByAdminComponent;
  let fixture: ComponentFixture<UserProjectByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProjectByAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProjectByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
