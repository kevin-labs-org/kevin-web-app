import { Component, input } from '@angular/core';
import { MatchPlayer } from '@/profile/match-player';
import { ChampionIcon } from '@/champion-icon/champion-icon';
import { RankBadge } from '@/rank-badge/rank-badge';
import { SummonerHandle } from '@/summoner-handle/summoner-handle';

@Component({
  imports: [ChampionIcon, RankBadge, SummonerHandle],
  selector: 'app-player-card',
  styleUrl: './player-card.css',
  templateUrl: './player-card.html',
})
export class PlayerCard {
  readonly player = input.required<MatchPlayer>();
}
