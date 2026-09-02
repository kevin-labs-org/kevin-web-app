import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Summoner } from '@/profile/summoner';
import { NgOptimizedImage } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardSonnerService } from '@/shared/components/sonner';
import { provideIcons } from '@ng-icons/core';
import { lucideLoaderCircle } from '@ng-icons/lucide';
import { ProfileStore } from '@/profile/profile-store';
import { MatchHistoryStore } from '@/profile/match-history-store';

@Component({
  selector: 'app-profile-dashboard',
  imports: [RouterOutlet, NgOptimizedImage, RouterLink, RouterLinkActive, ZardButtonComponent],
  templateUrl: './profile-dashboard.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  viewProviders: [provideIcons({ lucideLoaderCircle })],
  styleUrl: './profile-dashboard.css',
})
export class ProfileDashboard {
  private readonly zardSonnerService = inject(ZardSonnerService);

  private readonly refreshInFlight = signal(false);

  protected readonly shouldDisableRefresh = computed(() => this.refreshInFlight());

  private readonly profileStore = inject(ProfileStore);
  private readonly matchHistoryStore = inject(MatchHistoryStore);

  protected readonly profile = computed(() => this.profileStore.profile());

  protected refreshProfile() {
    if (this.refreshInFlight()) {
      return;
    }

    this.refreshInFlight.set(true);

    this.sendRefreshSummonerRequest().subscribe({
      error: (err) => {
        this.zardSonnerService.error('Uh oh!');
      },
      next: (result) => {
        this.zardSonnerService.success('Refresh profile');
        this.profileStore.reload();
        this.matchHistoryStore.reload();
      },
      complete: () => this.refreshInFlight.set(false),
    });
  }

  private sendRefreshSummonerRequest(): Observable<any> {
    return new Observable((observer) => {
      // Simulate an API call to refresh the summoner
      setTimeout(() => {
        observer.next({ message: 'Summoner refreshed' });
        observer.complete();
      }, 1000);
    });
  }
}
