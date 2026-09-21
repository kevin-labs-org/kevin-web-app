import { ResolveFn } from '@angular/router';
import { ProfileStore } from '@/profile/profile-store';
import { inject } from '@angular/core';
import { filter, map, take } from 'rxjs';

export const profileResolver: ResolveFn<boolean> = (route, state) => {
  const profileStore = inject(ProfileStore);
  profileStore.puuid.set("Some id using region, name, tag");
  return profileStore.profile$
    .pipe(
      filter(profile => !!profile),
      map(profile => !!profile),
      take(1),
    );
};
