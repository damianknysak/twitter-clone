import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsForYouComponent } from './trends-for-you.component';

describe('TrendsForYouComponent', () => {
  let component: TrendsForYouComponent;
  let fixture: ComponentFixture<TrendsForYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendsForYouComponent]
    });
    fixture = TestBed.createComponent(TrendsForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
