import { Component, computed, signal } from '@angular/core';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { MatchPlayer } from '@/profile/match-player';
import { PlayerCard } from '@/profile/match-history-card/scoreboard-tab/player-card/player-card';

@Component({
  imports: [ZardCardImports, PlayerCard],
  selector: 'app-scoreboard-tab',
  styleUrl: './scoreboard-tab.css',
  templateUrl: './scoreboard-tab.html',
})
export class ScoreboardTab {
  protected players = signal<MatchPlayer[]>([
    {
      puuid: '1',
      teamId: '2',
      participantId: '',
      championId: '',
      championLevel: 0,
      teamPosition: '',
      summonerSpellIds: [],
      itemIds: [],
      runeIds: [],
      kills: 1,
      deaths: 2,
      assists: 3,
      creep_score: 0,
      creep_score_per_minute: 0,
      damage_taken: 0,
      damage_delta_counterpart: 0,
      damage_share: 0,
      gold_earned: 0,
      gold_delta_counterpart: 0,
      gold_share: 0,
      rank: '',
      name: 'Doublelift',
      tag: 'NA1',
    },
  ]);

  protected readonly blueSide = computed(() =>
    this.players().filter((player) => player.teamId === '1'),
  );

  protected readonly redSide = computed(() =>
    this.players().filter((player) => player.teamId === '2'),
  );
}
