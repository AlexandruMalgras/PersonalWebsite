import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() notificationType: string;
  @Input() notificationMessage: string;

  constructor() {
    this.notificationMessage = '';
    this.notificationType = '';
  }

  getMessage() {
    return this.notificationMessage;
  }

  getPath() {
    if (this.notificationType == 'success')
    {
      return '../../assets/icons/success.png';
    }

    return '../../assets/icons/fail.png';
  }
}
