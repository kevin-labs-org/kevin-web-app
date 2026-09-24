import { Component, computed, input } from '@angular/core';
import { ZardBadgeComponent } from '@/shared/components/badge';

export type RankTier =
  | 'Challenger'
  | 'Grandmaster'
  | 'Master'
  | 'Diamond'
  | 'Platinum'
  | 'Gold'
  | 'Silver'
  | 'Bronze'
  | 'Iron';

export type RankDivision = 'I' | 'II' | 'III' | 'IV';

@Component({
  imports: [ZardBadgeComponent],
  selector: 'app-rank-badge',
  styleUrl: './rank-badge.css',
  templateUrl: './rank-badge.html',
})
export class RankBadge {
  readonly tier = input.required<RankTier>();
  readonly division = input.required<RankDivision>();
  readonly leaguePoints = input.required<number>();

  protected readonly shouldShowDivision = computed(() => {
    return !(
      this.tier() === 'Challenger' ||
      this.tier() === 'Grandmaster' ||
      this.tier() === 'Master'
    );
  });

  protected readonly rankColorClass = computed(() => {
    return RankBadge.rankColorClassMap[this.tier()] || '';
  });

  private static rankColorClassMap = {
    Challenger: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    Grandmaster: '',
    Master: '',
    Diamond: '',
    Platinum: '',
    Gold: '',
    Silver: '',
    Bronze: '',
    Iron: '',
  };
}
