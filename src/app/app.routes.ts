import { Routes } from '@angular/router';
import { ProfileDashboard } from '@/profile/profile-dashboard/profile-dashboard';
import { ProfileOverview } from '@/profile/profile-overview/profile-overview';
import { LandingScreen } from '@/landing/landing-screen/landing-screen';
import { profileResolver } from '@/profile/profile-resolver';
import { ProfileStore } from '@/profile/profile-store';
import { MatchHistoryStore } from '@/profile/match-history-store';
import { ProfileChampionAvg } from '@/profile/profile-champion-avg/profile-champion-avg';
import { Profiles } from '@/profiles/profiles/profiles';

export const routes: Routes = [
  {
    path: '',
    component: LandingScreen,
  },
  {
    path: 'profile/:region/:tag/:name',
    component: ProfileDashboard,
    providers: [ProfileStore, MatchHistoryStore],
    resolve: {
      ready: profileResolver,
    },
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: ProfileOverview },
      { path: 'champions', component: ProfileChampionAvg },
    ],
  },
  {
    path: 'profiles',
    component: Profiles,
  },
];
