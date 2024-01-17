import { Component } from '@angular/core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import {
  faComment,
  faHeart,
  faShareSquare,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  ellipsisIcon = faEllipsis;
  heartIcon = faHeart;
  commentIcon = faComment;
  shareIcon = faShareSquare;
}
