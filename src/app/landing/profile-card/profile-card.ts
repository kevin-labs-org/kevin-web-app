import { Component, computed, inject, input } from '@angular/core';
import { DdragonService } from '@/ddragon/ddragon-service';
import { RankBadge, RankDivision, RankTier } from '@/rank-badge/rank-badge';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { ZardAvatarImports } from '@/shared/components/avatar';
import { Profile } from '@/landing/profile';
import { SummonerHandle } from '@/summoner-handle/summoner-handle';
import { SavedProfile } from '@/landing/saved-profile';

@Component({
  imports: [ZardCardImports, ZardAvatarImports, RankBadge, SummonerHandle],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  readonly profile = input.required<SavedProfile>();

  private readonly ddragonService = inject(DdragonService);

  protected readonly profileIconUrl = computed(() =>
    this.ddragonService.getProfileIconUrl(this.profile().profileIconId),
  );

  protected readonly tier = computed(() => 'Challenger' as RankTier);
  protected readonly division = computed(() => 'I' as RankDivision);
}
