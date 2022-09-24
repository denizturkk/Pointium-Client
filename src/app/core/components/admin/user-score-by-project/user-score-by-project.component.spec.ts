import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScoreByProjectComponent } from './user-score-by-project.component';

describe('UserScoreByProjectComponent', () => {
  let component: UserScoreByProjectComponent;
  let fixture: ComponentFixture<UserScoreByProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserScoreByProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserScoreByProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
