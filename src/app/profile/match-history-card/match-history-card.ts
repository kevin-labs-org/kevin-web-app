import { Component, computed, inject, input } from '@angular/core';
import { lucideArrowUp, lucidePopcorn } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';
import { ZardCardComponent } from '@/shared/components/card';
import { MatchHistory } from '@/profile/match-history';
import { ChampionIcon } from '@/champion-icon/champion-icon';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { RankBadge } from '@/rank-badge/rank-badge';
import { ZardCollapsibleImports } from '@/shared/components/collapsible';
import { ZardTabsImports } from '@/shared/components/tabs';
import { OverviewTab } from '@/profile/match-history-card/overview-tab/overview-tab';
import { ScoreboardTab } from '@/profile/match-history-card/scoreboard-tab/scoreboard-tab';
import { CollapsibleService } from '@/profile/collapsible-service';

@Component({
  selector: 'app-match-history-card',
  imports: [
    ZardCardComponent,
    ChampionIcon,
    ZardCardImports,
    RankBadge,
    ZardCollapsibleImports,
    ZardTabsImports,
    OverviewTab,
    ScoreboardTab,
  ],
  templateUrl: './match-history-card.html',
  styleUrl: './match-history-card.css',
  viewProviders: [provideIcons({ lucideArrowUp, lucidePopcorn })],
})
export class MatchHistoryCard {
  matchHistory = input.required<MatchHistory>();

  protected readonly collapsibleService = inject(CollapsibleService);

  private activeKey = computed(() => this.matchHistory().id);

  protected open() {
    this.collapsibleService.setActiveKey(this.activeKey());
  }

  readonly shouldOpen = computed(() => this.collapsibleService.shouldShow(this.activeKey()));
}
