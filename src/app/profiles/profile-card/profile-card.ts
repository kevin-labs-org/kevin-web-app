import { Component, computed, input } from '@angular/core';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { ZardAvatarImports } from '@/shared/components/avatar';
import { Profile } from '@/profiles/profile';
import { RankBadge, RankDivision, RankTier } from '@/rank-badge/rank-badge';
import { ZardBadgeComponent } from '@/shared/components/badge';

@Component({
  imports: [ZardCardImports, ZardAvatarImports, RankBadge, ZardBadgeComponent],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  readonly profile = input.required<Profile>();

  protected readonly tier = computed(() => 'Challenger' as RankTier);
  protected readonly division = computed(() => 'I' as RankDivision);
}
