import { Component } from '@angular/core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trends-for-you',
  templateUrl: './trends-for-you.component.html',
  styleUrls: ['./trends-for-you.component.css'],
})
export class TrendsForYouComponent {
  ellipsisIcon = faEllipsis;
}
