export interface MatchPlayer {
  puuid: string;
  teamId: string;
  name: string;
  tag: string;
  participantId: string;
  championId: string;
  championLevel: number;
  teamPosition: string;
  summonerSpellIds: string[];
  itemIds: string[];
  runeIds: string[];
  kills: number;
  deaths: number;
  assists: number;
  creep_score: number;
  creep_score_per_minute: number;
  damage_taken: number;
  damage_delta_counterpart: number;
  damage_share: number;
  gold_earned: number;
  gold_delta_counterpart: number;
  gold_share: number;
  rank: string;
}
