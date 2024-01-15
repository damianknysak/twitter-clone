import { Component } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activeSection = 'for-you';
  galleryIcon = faImage;
  changeSection(section: string) {
    this.activeSection = section;
  }
}
