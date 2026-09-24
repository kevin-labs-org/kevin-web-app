import { Component } from '@angular/core';
import { Observable, of, timeout } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { Profile } from '@/profiles/profile';
import { ProfileCard } from '@/profiles/profile-card/profile-card';

@Component({
  imports: [ProfileCard],
  selector: 'app-profiles',
  styleUrl: './profiles.css',
  templateUrl: './profiles.html',
})
export class Profiles {
  protected readonly ladderResource = rxResource({
    stream: (_) => this.sendGetProfilesRequest(),
  });

  private sendGetProfilesRequest(): Observable<Profile[]> {
    return of([
      {
        tier: 'Challenger',
        division: 'I',
        leaguePoints: 5213,
        name: 'Doublelift',
        tag: 'BRO',
        ladderRank: 1,
        champions: [
          'https://wiki.leagueoflegends.com/en-us/images/thumb/Yasuo_OriginalSquare.png/40px-Yasuo_OriginalSquare.png?efb3b',
          'https://wiki.leagueoflegends.com/en-us/images/thumb/Yasuo_OriginalSquare.png/40px-Yasuo_OriginalSquare.png?efb3b',
          'https://wiki.leagueoflegends.com/en-us/images/thumb/Yasuo_OriginalSquare.png/40px-Yasuo_OriginalSquare.png?efb3b',
        ],
        profileIconId: 'https://ddragon-webp.lolmath.net/latest/img/profileicon/7.webp',
      } as Profile,
      {
        tier: 'Challenger',
        division: 'I',
        leaguePoints: 5213,
        name: 'Doublelift',
        tag: 'BRO',
        ladderRank: 2,
      } as Profile,
      {
        tier: 'Challenger',
        division: 'I',
        leaguePoints: 5213,
        name: 'Doublelift',
        tag: 'BRO',
        ladderRank: 3,
      } as Profile,
      {
        tier: 'Challenger',
        division: 'I',
        leaguePoints: 5213,
        name: 'Doublelift',
        tag: 'BRO',
        ladderRank: 4,
      } as Profile,
    ]).pipe(timeout(1000));
  }
}
