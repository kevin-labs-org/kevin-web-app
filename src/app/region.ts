export const Region = {
  NA: 'NA',
  EUW: 'EUW',
  KR: 'KR',
} as const

export type Region = typeof Region[keyof typeof Region]

export const RegionList = Object.values(Region) as Region[];

