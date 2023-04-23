import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  active = 1;
  yearsPassed: number;

  constructor() {
    const startDate = new Date('1998-11-06');
    const today = new Date();
    const yearDiff = today.getFullYear() - startDate.getFullYear();
    const monthDiff = today.getMonth() - startDate.getMonth();
    const dayDiff = today.getDate() - startDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      this.yearsPassed = yearDiff - 1;
    } else {
      this.yearsPassed = yearDiff;
    }
  }

  setActive(number: number)
  {
    this.active = number;
  }
}
