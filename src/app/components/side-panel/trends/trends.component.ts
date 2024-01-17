import { Component } from '@angular/core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css'],
})
export class TrendsComponent {
  ellipsisIcon = faEllipsis;
}
