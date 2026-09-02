import { MatchHistory } from '@/profile/match-history';

export interface GetMatchHistoryResponse {
  matchList: MatchHistory[];
  nextPageToken?: string;
}
