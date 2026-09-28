import { Component, input, signal } from '@angular/core';
import { lucideArrowUp, lucidePopcorn } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';
import { ZardCardComponent } from '@/shared/components/card';
import { MatchHistory } from '@/profile/match-history';
import { ChampionIcon } from '@/champion-icon/champion-icon';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { RankBadge } from '@/rank-badge/rank-badge';
import { ZardCollapsibleImports } from '@/shared/components/collapsible';
import { StatisticGroup } from '@/profile/match-history-card/statistic-group/statistic-group';
import { InventoryWidget } from '@/inventory-widget/inventory-widget';

@Component({
  selector: 'app-match-history-card',
  imports: [
    ZardCardComponent,
    ChampionIcon,
    ZardCardImports,
    RankBadge,
    ZardCollapsibleImports,
    StatisticGroup,
    InventoryWidget,
  ],
  templateUrl: './match-history-card.html',
  styleUrl: './match-history-card.css',
  viewProviders: [provideIcons({ lucideArrowUp, lucidePopcorn })],
})
export class MatchHistoryCard {
  matchHistory = input.required<MatchHistory>();

  readonly open = signal(true);
}
