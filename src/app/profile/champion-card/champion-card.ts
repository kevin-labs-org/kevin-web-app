import { Component, computed, inject, signal } from '@angular/core';
import { ZardFieldImports } from '@/shared/components/field';
import { ZardProgressComponent } from '@/shared/components/progress';
import { ChampionIcon } from '@/champion-icon/champion-icon';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { MatchHistoryStore } from '@/profile/match-history-store';
import { MatchHistory } from '@/profile/match-history';
import { ZardToggleGroupComponent, ZardToggleGroupItem } from '@/shared/components/toggle-group';
import { lucideBold, lucideItalic, lucideUnderline } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';

interface ChampionData {
  championId: string;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
}

const SortCriteria = {
  GAMES_PLAYED: 'GAMES_PLAYED',
  WIN_RATE: 'WIN_RATE',
};

@Component({
  imports: [
    ZardFieldImports,
    ZardProgressComponent,
    ChampionIcon,
    ZardCardImports,
    ZardToggleGroupComponent,
  ],
  selector: 'app-champion-card',
  styleUrl: './champion-card.css',
  templateUrl: './champion-card.html',
  viewProviders: [
    provideIcons({
      lucideBold,
      lucideItalic,
      lucideUnderline,
    }),
  ],
})
export class ChampionCard {
  private readonly matchHistoryStore = inject(MatchHistoryStore);

  private readonly champions = computed(() => {
    const matches = this.matchHistoryStore.matchHistory();
    if (!matches) return undefined;

    const matchesByChampion = matches.matchList.reduce(
      (acc, match) => {
        const key = match.championId;

        if (!acc[key]) {
          acc[key] = [];
        }

        acc[key].push(match);
        return acc;
      },
      {} as Record<string, MatchHistory[]>,
    );

    return Object.entries(matchesByChampion).map(([championId, match]) => {
      const b = match.reduce(
        (acc, o) => {
          acc.gamesPlayed += 1;
          acc.gamesWon += o.winner_id === o.team_id ? 1 : 0;
          acc.gamesLost += o.winner_id !== o.team_id ? 1 : 0;
          return acc;
        },
        { championId: championId, gamesLost: 0, gamesWon: 0, gamesPlayed: 0 } as ChampionData,
      );
      return b;
    });
  });

  protected readonly totalGamesPlayed = computed(() => {
    return this.champions()?.reduce((acc, champion) => acc + champion.gamesPlayed, 0);
  });

  protected readonly championsByGamesPlayed = computed(() => {
    return this.champions()?.sort((a, b) => {
      return b.gamesPlayed - a.gamesPlayed;
    });
  });

  protected readonly championsByGamesWon = computed(() => {
    return this.champions()?.sort((a, b) => {
      return b.gamesWon - a.gamesWon;
    });
  });

  protected readonly sortBy = signal(SortCriteria.GAMES_PLAYED);

  items: ZardToggleGroupItem[] = [
    {
      value: SortCriteria.GAMES_PLAYED,
      icon: 'lucideBold',
      ariaLabel: 'Sort by games played',
    },
    {
      value: SortCriteria.WIN_RATE,
      icon: 'lucideItalic',
      ariaLabel: 'Sort by win rate',
    },
  ];
}
