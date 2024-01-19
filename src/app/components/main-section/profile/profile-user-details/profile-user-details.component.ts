import { Component } from '@angular/core';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-user-details',
  templateUrl: './profile-user-details.component.html',
  styleUrls: ['./profile-user-details.component.css'],
})
export class ProfileUserDetailsComponent {
  calendarIcon = faCalendarDay;
}
