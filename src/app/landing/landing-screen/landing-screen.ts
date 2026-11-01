import { Component, inject, signal } from '@angular/core';
import { PageHeader } from '@/page-header/page-header';
import { PageBody } from '@/page-body/page-body';
import { LandingService } from '@/landing/landing-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { LadderCard } from '@/landing/ladder-card/ladder-card';
import { RegionDropdown } from '@/region-dropdown/region-dropdown';
import { TranslatePipe } from '@ngx-translate/core';
import { Profile } from '@/landing/profile';
import { ProfileCard } from '@/landing/profile-card/profile-card';
import { SavedProfile } from '@/landing/saved-profile';

interface FilterCriteria {
  region: string;
}

const DEFAULT_FILTER_CRITERIA: FilterCriteria = {
  region: 'NA',
};

@Component({
  imports: [PageHeader, PageBody, LadderCard, RegionDropdown, TranslatePipe, ProfileCard],
  selector: 'app-landing-screen',
  styleUrl: './landing-screen.css',
  templateUrl: './landing-screen.html',
})
export class LandingScreen {
  private readonly landingService = inject(LandingService);

  protected readonly filterCriteria = signal<FilterCriteria>(DEFAULT_FILTER_CRITERIA);

  private readonly _ladderResource = rxResource({
    params: (_) => this.filterCriteria(),
    stream: ({ params }) => this.landingService.getLadder(params),
  });

  protected readonly ladderResource = this._ladderResource.asReadonly();

  protected onRegionSelected(region: string): void {
    this.filterCriteria.set({ ...this.filterCriteria(), region });
  }

  protected getRecentlyViewedProfiles(): SavedProfile[] {
    return [
      {
        puuid: '1',
        region: 'NA',
        name: 'Doublelift',
        tag: 'Bro',
        profileIconId: '23',
        tier: 'Challenger',
        division: '',
        leaguePoints: 100,
        ladderRank: 2,
      },
    ];
  }

  protected getSavedProfiles(): SavedProfile[] {
    return [];
  }
}
