import { Region } from '@/region';

export const REGION_ICON = {
  [Region.NA]: 'flagUs',
  [Region.EUW]: 'flagEu',
  [Region.KR]: 'flagKr',
} as const satisfies Record<Region, string>;
