import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-holi-landing',
  templateUrl: './holi-page-with-name.component.html',
  styleUrls: ['holi-page-with-name.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class HoliPageWithNameComponent implements OnInit {
  yourName: string = '';
  receiverName: string = 'Nitin';
  isNameSubmitted: boolean = false;
  arrived: boolean = false;
  currentDate = new Date();
  timeLeft!: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const queryName = this.route.snapshot.queryParamMap.get('name');
    if (queryName) {
      this.receiverName = queryName;
    }

    // Check if Holi 2025 is approaching
    this.advanceWish();
    this.timeLeft = this.calculateTimeLeft();
  }

  advanceWish() {
    const holiDate = 14;
    const holiMonth = 2;
    const holiYear = 2025;

    if (
      holiYear > this.currentDate.getFullYear() ||
      (holiYear === this.currentDate.getFullYear() &&
        holiMonth > this.currentDate.getMonth()) ||
      (holiYear === this.currentDate.getFullYear() &&
        holiMonth === this.currentDate.getMonth() &&
        holiDate >= this.currentDate.getDate())
    ) {
      this.arrived = true;
    }
  }
  holiDate = new Date(2025, 2, 14);

  // Calculate the time difference

  calculateTimeLeft() {
    const timeDifference = this.holiDate.getTime() - this.currentDate.getTime();

    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)
    );
    const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));

    return { days, hours, minutes };
  }

  shareHoliWish(): void {
    // Validate that the user has entered a name
    if (this.yourName.trim()) {
      this.isNameSubmitted = true;
      const shareableLink = `${
        window.location.origin
      }/home?name=${encodeURIComponent(this.yourName)}`;
      const message = `होली की शुभकामनाएं! 🌸\nलिंक पर क्लिक करें: ${shareableLink}`;

      // Share the link via WhatsApp
      window.open(
        `https://wa.me/?text=${encodeURIComponent(message)}`,
        '_blank'
      );
    } else {
      alert('कृपया अपना पूरा नाम दर्ज करें!');
    }
  }
}
