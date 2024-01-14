import { Component } from '@angular/core';
import { faEllipsis, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent {
  searchIcon = faSearch;
  ellipsisIcon = faEllipsis;

}