import { Component, computed, inject, input } from '@angular/core';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { ZardAvatarImports } from '@/shared/components/avatar';
import { Profile } from '@/profiles/profile';
import { RankBadge, RankDivision, RankTier } from '@/rank-badge/rank-badge';
import { DdragonService } from '@/ddragon/ddragon-service';
import { provideIcons } from '@ng-icons/core';
import { lucideMinus, lucideSlash } from '@ng-icons/lucide';
import { SummonerHandle } from '@/summoner-handle/summoner-handle';
import { WinLoss } from '@/win-loss/win-loss';

@Component({
  imports: [ZardCardImports, ZardAvatarImports, RankBadge, SummonerHandle, WinLoss],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
  viewProviders: [provideIcons({ lucideMinus, lucideSlash })],
})
export class ProfileCard {
  private readonly ddragonService = inject(DdragonService);

  readonly profile = input.required<Profile>();

  protected readonly profileIconUrl = computed(() =>
    this.ddragonService.getProfileIconUrl(this.profile().profileIconId),
  );

  protected readonly tier = computed(() => 'Challenger' as RankTier);
  protected readonly division = computed(() => 'I' as RankDivision);
}
