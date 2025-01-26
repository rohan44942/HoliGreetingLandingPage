import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  personName: string = 'Nitin';
  isSplitting = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the "name" query parameter from the URL
    const queryName = this.route.snapshot.queryParamMap.get('name');
    if (queryName) {
      this.personName = queryName; // Override default if query param exists
    }
  }

  redirectToHoliPage(): void {
    // Navigate to the Holi page with the current name in query parameters
    this.isSplitting = true;
    setTimeout(() => {
      this.router.navigate(['/holi'], {
        queryParams: { name: this.personName },
      });
    }, 1500);
  }
}
