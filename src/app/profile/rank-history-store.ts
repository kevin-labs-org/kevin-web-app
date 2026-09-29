import { inject, Injectable, resource, signal } from '@angular/core';
import { ProfileService } from '@/profile/profile-service';

@Injectable()
export class RankHistoryStore {
  private readonly puuid = signal('');

  private readonly profileService = inject(ProfileService);

  private readonly _rankHistory = resource({
    // Define a reactive computation.
    // The params value recomputes whenever any read signals change.
    params: () => ({ puuid: this.puuid() }),
    // Define an async loader that retrieves data.
    // The resource calls this function every time the `params` value changes.
    loader: ({ params }) => this.profileService.getRankHistory(params.puuid),
  });

  readonly rankHistory = this._rankHistory.asReadonly();
}
