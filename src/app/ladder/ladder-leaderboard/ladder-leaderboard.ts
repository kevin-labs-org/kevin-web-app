import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ladder-leaderboard',
  styleUrl: './ladder-leaderboard.css',
  templateUrl: './ladder-leaderboard.html',
})
export class LadderLeaderboard {
  readonly region = input.required<string>();
}
