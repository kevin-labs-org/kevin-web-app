import { Profile } from '@/landing/profile';

export interface GetLadderRequest {
  region: string;
}

export interface GetLadderResponse {
  entries: Profile[];
}
