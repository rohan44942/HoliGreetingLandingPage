import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-holi-landing',
  templateUrl: './holi-page-with-name.component.html',
  styleUrls: ['holi-page-with-name.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
// export class HoliPageWithNameComponent implements OnInit {
//   yourName: string = '';
//   receiverName: string | null = null;
//   newPersonName: string = '';

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     // Get the "name" query parameter to display personalized greeting
//     this.receiverName = this.route.snapshot.queryParamMap.get('name');
//     if (!this.receiverName) {
//       this.receiverName = 'Nitin';
//     }
//   }

//   shareHoliWish(): void {
//     if (this.yourName.trim()) {
//       const shareableLink = `${
//         window.location.origin
//       }/holi%3Fname%3D${encodeURIComponent(this.yourName)}`;
//       const message = `होली की शुभकामनाएं! 🌸
//       लिंक पर क्लिक करें: ${shareableLink}`;

//       // Share on WhatsApp
//       window.open(
//         `https://wa.me/?text=${encodeURIComponent(message)}`,
//         '_blank'
//       );
//     } else {
//       alert('कृपया अपना नाम दर्ज करें!');
//     }
//   }
// }
export class HoliPageWithNameComponent implements OnInit {
  yourName: string = '';
  receiverName: string = 'Nitin'; // Default greeting name
  isNameSubmitted: boolean = false; // Tracks if the name has been submitted

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the "name" query parameter
    const queryName = this.route.snapshot.queryParamMap.get('name');
    if (queryName) {
      this.receiverName = queryName; // Override default if query param exists
    }
  }

  shareHoliWish(): void {
    // Validate that the user has entered a name
    if (this.yourName.trim()) {
      this.isNameSubmitted = true; // Mark the name as submitted
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
