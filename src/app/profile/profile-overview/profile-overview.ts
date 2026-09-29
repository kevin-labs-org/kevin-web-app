import { Component, computed, inject, resource, signal } from '@angular/core';
import { ProfileService } from '@/profile/profile-service';
import { MatchHistoryStore } from '@/profile/match-history-store';
import { MatchHistoryCard } from '@/profile/match-history-card/match-history-card';
import { MatchHistory } from '@/profile/match-history';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { ZardMarkerImports } from '@/shared/components/marker';
import { ZardComboboxImports, ZardComboboxOption } from '@/shared/components/combobox';
import { DdragonService } from '@/ddragon/ddragon-service';
import { ZardButtonComponent } from '@/shared/components/button';

interface FilterCriteria {
  championId: string;
}

const SortCriteria = {
  DATE_ASC: 'DATE_ASC',
  DATE_DESC: 'DATE_DESC',
};

@Component({
  selector: 'app-profile-overview',
  imports: [
    MatchHistoryCard,
    KeyValuePipe,
    ZardMarkerImports,
    DatePipe,
    ZardComboboxImports,
    ZardButtonComponent,
  ],
  templateUrl: './profile-overview.html',
  styleUrl: './profile-overview.css',
})
export class ProfileOverview {
  private readonly profileService = inject(ProfileService);
  private readonly ddragonService = inject(DdragonService);
  readonly matchHistoryStore = inject(MatchHistoryStore);

  readonly puuid = signal('');

  protected readonly rankHistoryResource = resource({
    // Define a reactive computation.
    // The params value recomputes whenever any read signals change.
    params: () => ({ puuid: this.puuid() }),
    // Define an async loader that retrieves data.
    // The resource calls this function every time the `params` value changes.
    loader: ({ params }) => this.profileService.getRankHistory(params.puuid),
  });

  constructor() {
    this.matchHistoryStore.puuid.set('ads');
  }

  protected readonly matchHistory = computed(() => {
    return this.matchHistoryStore.matchHistory()?.matchList ?? [];
  });

  protected readonly isLoading = computed(() => {
    return this.matchHistoryStore.matchHistoryResource.isLoading();
  });

  protected readonly filterCriteria = signal<FilterCriteria>({ championId: '' });

  protected readonly championOptions = computed<ZardComboboxOption[]>(() => {
    const championData = this.ddragonService.getAllChampions();
    if (!championData) {
      return [];
    }
    const options = [];

    options.push({ value: '', label: 'All' });

    options.push(
      ...championData.map((champion) => {
        return { value: champion.id, label: champion.name };
      }),
    );

    return options;
  });

  protected readonly sortOptions: ZardComboboxOption[] = [
    { value: SortCriteria.DATE_DESC, label: 'Date desc (default)' },
    { value: SortCriteria.DATE_ASC, label: 'Date asc' },
  ];

  protected readonly selectedSortOption = signal<string | string[] | null>(SortCriteria.DATE_DESC);

  protected readonly isSortedByDate = computed(() => {
    return (
      this.selectedSortOption() === SortCriteria.DATE_DESC ||
      this.selectedSortOption() === SortCriteria.DATE_ASC
    );
  });

  protected readonly finalMatchHistory = computed(() => {
    const championId = this.filterCriteria().championId;

    return this.matchHistory()
      .filter((match) => {
        if (championId) {
          return match.championId === championId;
        }
        return true;
      })
      .sort((a, b) => {
        switch (this.selectedSortOption()) {
          case SortCriteria.DATE_ASC:
            return a.date.getTime() - b.date.getTime();
          case SortCriteria.DATE_DESC:
            return b.date.getTime() - a.date.getTime();
          default:
            return 0;
        }
      });
  });

  protected readonly matchHistoryByDate = computed(() => {
    return this.finalMatchHistory().reduce(
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

  protected mapComboboxInput(input: string | string[] | null): string {
    return input instanceof Array ? input[0] : input || '';
  }
}
