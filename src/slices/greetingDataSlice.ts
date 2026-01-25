import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { HolidayName } from '../constants/holydays';
import type {
  SettingsToneType,
  SettingsLanguageType,
  SettingsLengthType,
} from '../constants/settings';

interface GreetSettings {
  tone: SettingsToneType;
  language: SettingsLanguageType;
  length: SettingsLengthType;
}

interface GreetingData {
  holiday: HolidayName;
  name: string;
  age: string;
  interests: string;
  settings: GreetSettings;
}

const initialState: GreetingData = {
  holiday: 'День рождения',
  name: '',
  age: '',
  interests: '',
  settings: {
    tone: 'Официальный',
    language: 'ru',
    length: 'short',
  },
};

export const greetingDataSlice = createSlice({
  name: 'greetingData',
  initialState,
  reducers: {
    clearAllFields: () => {
      return initialState;
    },
    setHoliday: (state, action) => {
      state.holiday = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setInterests: (state, action) => {
      state.interests = action.payload;
    },
    setSettingsTone: (state, action: PayloadAction<SettingsToneType>) => {
      state.settings.tone = action.payload;
    },
    setSettingsLanguage: (state, action: PayloadAction<SettingsLanguageType>) => {
      state.settings.language = action.payload;
    },
    setSettingsLength: (state, action: PayloadAction<SettingsLengthType>) => {
      state.settings.length = action.payload;
    },
  },
});

export const {
  clearAllFields,
  setHoliday,
  setName,
  setAge,
  setInterests,
  setSettingsTone,
  setSettingsLanguage,
  setSettingsLength
} = greetingDataSlice.actions;

export default greetingDataSlice.reducer;
