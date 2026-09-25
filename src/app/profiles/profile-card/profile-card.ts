import { Component, computed, inject, input } from '@angular/core';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { ZardAvatarImports } from '@/shared/components/avatar';
import { Profile } from '@/profiles/profile';
import { RankBadge, RankDivision, RankTier } from '@/rank-badge/rank-badge';
import { DdragonService } from '@/ddragon/ddragon-service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMinus, lucideSlash } from '@ng-icons/lucide';

@Component({
  imports: [ZardCardImports, ZardAvatarImports, RankBadge, NgIcon],
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
