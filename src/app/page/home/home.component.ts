import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { timeInterval } from 'rxjs';

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
    const queryName = this.route.snapshot.queryParamMap.get('name');
    if (queryName) {
      this.personName = queryName;
    }
  }

  redirectToHoliPage(): void {
    // Navigate to the Holi page with the current name in query parameters
    this.isSplitting = true;
    setTimeout(() => {
      this.router.navigate(['/holi'], {
        queryParams: { name: this.personName },
      });
      console.log('before play musci ');
      this.playMusic();
      console.log('after play music ');
    }, 1500);
  }

  playMusic() {
    // play here
    // let player = document.getElementById('music');
    let audio = new Audio(
      '/assets/music/Holiya Mein Ude Re Gulal Ila Arun (DjPunjab.Farm) (1).mp3'
    );
    // var audio = new Audio(
    //   'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
    // );
    // audio.play();
    console.log('play music running ');
    setTimeout(() => {
      audio.play();
      // player?.onplay;
    }, 1500);
  }
}
