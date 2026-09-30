export const Role = {
  TOP: 'TOP',
  JUNGLE: 'JUNGLE',
  MID: 'MID',
  ADC: 'ADC',
  SUPPORT: 'SUPPORT',
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export const RoleList = Object.values(Role) as string[];
