import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserContentComponent } from './profile-user-content.component';

describe('ProfileUserContentComponent', () => {
  let component: ProfileUserContentComponent;
  let fixture: ComponentFixture<ProfileUserContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUserContentComponent]
    });
    fixture = TestBed.createComponent(ProfileUserContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
