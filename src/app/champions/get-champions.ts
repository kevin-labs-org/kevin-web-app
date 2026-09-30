import { Champion } from '@/champions/champion';

export interface GetChampionsRequest {
  region: string;
  role: string;
  patch: string;
}

export interface GetChampionsResponse {
  champions: Champion[];
}
