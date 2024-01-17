import { Component } from '@angular/core';

@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.css'],
})
export class HomeNavigationComponent {
  activeSection = 'for-you';
  changeSection(section: string) {
    this.activeSection = section;
  }
}
