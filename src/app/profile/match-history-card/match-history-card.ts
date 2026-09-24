import { Component, inject, input } from '@angular/core';
import { lucideArrowUp, lucidePopcorn } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';
import { DdragonService } from '@/ddragon/ddragon-service';
import { ZardCardComponent, ZardCardHeaderComponent } from '@/shared/components/card';
import { MatchHistory } from '@/profile/match-history';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-match-history-card',
  imports: [AsyncPipe, ZardCardComponent, ZardCardHeaderComponent, NgOptimizedImage],
  templateUrl: './match-history-card.html',
  styleUrl: './match-history-card.css',
  viewProviders: [provideIcons({ lucideArrowUp, lucidePopcorn })],
})
export class MatchHistoryCard {
  protected readonly ddragonService = inject(DdragonService);
  protected readonly championSquare$ = this.ddragonService.getChampionSquare('4');

  matchHistory = input.required<MatchHistory>();
}
