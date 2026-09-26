import { Component, computed, input } from '@angular/core';
import { lucideMinus, lucideSlash } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'app-win-loss',
  styleUrl: './win-loss.css',
  templateUrl: './win-loss.html',
  viewProviders: [provideIcons({ lucideMinus, lucideSlash })],
})
export class WinLoss {
  readonly wins = input.required<number>();
  readonly losses = input.required<number>();

  protected readonly winPercentage = computed(
    () => (this.wins() / (this.wins() + this.losses())) * 100,
  );
}
