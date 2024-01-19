import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelExploreComponent } from './search-panel-explore.component';

describe('SearchPanelExploreComponent', () => {
  let component: SearchPanelExploreComponent;
  let fixture: ComponentFixture<SearchPanelExploreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPanelExploreComponent]
    });
    fixture = TestBed.createComponent(SearchPanelExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
