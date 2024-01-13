import { Component } from '@angular/core';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faEllipsis,
  faHouse,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.css'],
})
export class SideHeaderComponent {
  twitterIcon = faXTwitter;
  homeIcon = faHouse;
  searchIcon = faSearch;
  userIcon = faUser;
  ellipsisIcon = faEllipsis;
}
