export const SETTINGS = {
  TONE: {
    OFFICIAL: 'official',
    HUMOROUS: 'humorous',
    ROMANTIC: 'romantic',
  },
  LANGUAGE: {
    RU: 'ru',
    EN: 'en',
  },
  LENGTH: {
    SHORT: 'short',
    MEDIUM: 'medium',
    LONG: 'long',
  },
} as const;

export type SettingsToneType =
  (typeof SETTINGS.TONE)[keyof typeof SETTINGS.TONE];
export type SettingsLanguageType =
  (typeof SETTINGS.LANGUAGE)[keyof typeof SETTINGS.LANGUAGE];
export type SettingsLengthType =
  (typeof SETTINGS.LENGTH)[keyof typeof SETTINGS.LENGTH];
