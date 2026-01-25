export const HOLIDAYS = {
  BIRTHDAY: 'День рождения',
  NEW_YEAR: 'Новый год',
  WOMANS_DAY: '8 марта',
  WEDDING: 'Свадьба',
} as const;

export type HolidayName = (typeof HOLIDAYS)[keyof typeof HOLIDAYS];
