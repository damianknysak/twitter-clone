import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-panel-explore',
  templateUrl: './search-panel-explore.component.html',
  styleUrls: ['./search-panel-explore.component.css'],
})
export class SearchPanelExploreComponent {
  searchIcon = faSearch;
}
