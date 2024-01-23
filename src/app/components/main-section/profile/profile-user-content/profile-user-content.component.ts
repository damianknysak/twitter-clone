import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-user-content',
  templateUrl: './profile-user-content.component.html',
  styleUrls: ['./profile-user-content.component.css'],
})
export class ProfileUserContentComponent {
  activeSection = 'posts';
  changeSection(section: 'posts' | 'replies' | 'likes') {
    this.activeSection = section;
  }
}
