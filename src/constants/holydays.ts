export const HOLIDAYS = {
  BIRTHDAY: 'birthday',
  NEW_YEAR: 'new year',
  WOMANS_DAY: '8 march',
  WEDDING: 'wedding',
} as const;

export type HolidayName = (typeof HOLIDAYS)[keyof typeof HOLIDAYS];
