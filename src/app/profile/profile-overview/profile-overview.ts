import { Component, computed, inject, resource, signal } from '@angular/core';
import { ProfileService } from '@/profile/profile-service';
import { MatchHistoryStore } from '@/profile/match-history-store';

@Component({
  selector: 'app-profile-overview',
  imports: [],
  templateUrl: './profile-overview.html',
  styleUrl: './profile-overview.css',
})
export class ProfileOverview {
  private readonly profileService = inject(ProfileService);

  readonly puuid = signal('');

  protected readonly rankHistoryResource = resource({
    // Define a reactive computation.
    // The params value recomputes whenever any read signals change.
    params: () => ({ puuid: this.puuid() }),
    // Define an async loader that retrieves data.
    // The resource calls this function every time the `params` value changes.
    loader: ({ params }) => this.profileService.getRankHistory(params.puuid),
  });

  readonly matchHistoryStore = inject(MatchHistoryStore);

  constructor() {
    this.matchHistoryStore.puuid.set('ads');
  }

  protected readonly matchHistory = computed(() => {
    return this.matchHistoryStore.matchHistory()?.matchList ?? [];
  });

  protected readonly isLoading = computed(() => {
    return this.matchHistoryStore.matchHistoryResource.isLoading();
  });
}
