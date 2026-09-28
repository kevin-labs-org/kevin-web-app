import { Component, computed, inject, resource, signal } from '@angular/core';
import { ProfileService } from '@/profile/profile-service';
import { MatchHistoryStore } from '@/profile/match-history-store';
import { MatchHistoryCard } from '@/profile/match-history-card/match-history-card';
import { MatchHistory } from '@/profile/match-history';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { ZardMarkerImports } from '@/shared/components/marker';
import { CollapsibleService } from '@/profile/collapsible-service';

@Component({
  selector: 'app-profile-overview',
  imports: [MatchHistoryCard, KeyValuePipe, ZardMarkerImports, DatePipe],
  templateUrl: './profile-overview.html',
  styleUrl: './profile-overview.css',
  providers: [CollapsibleService],
})
export class ProfileOverview {
  private readonly profileService = inject(ProfileService);

  readonly puuid = signal('');

  protected readonly rankHistoryResource = resource({
    // Define a reactive computation.
    // The params value recomputes whenever any read signals change.
    params: () => ({ puuid: this.puuid() }),
    // Define an async loader that retrieves data.
    // The resource calls this function every time the `params` value changes.
    loader: ({ params }) => this.profileService.getRankHistory(params.puuid),
  });

  readonly matchHistoryStore = inject(MatchHistoryStore);

  constructor() {
    this.matchHistoryStore.puuid.set('ads');
  }

  protected readonly matchHistory = computed(() => {
    return this.matchHistoryStore.matchHistory()?.matchList ?? [];
  });

  protected readonly isLoading = computed(() => {
    return this.matchHistoryStore.matchHistoryResource.isLoading();
  });

  protected readonly matchHistoryByDate = computed(() => {
    return this.matchHistory().reduce(
      (acc, match) => {
        const dateKey = match.date.toISOString().split('T')[0];
        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }
        acc[dateKey].push(match);
        return acc;
      },
      {} as Record<string, MatchHistory[]>,
    );
  });
}
