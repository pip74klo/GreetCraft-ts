import { createSlice } from "@reduxjs/toolkit";

interface GenerationState {
  generatedGreeting: string,
  history: string[]
}

const initialState: GenerationState = {
  generatedGreeting: '',
  history: []
};

export const generationSlice = createSlice({
  name: 'generation',
  initialState,
  reducers: {
    setGeneratedGreeting: (state, action) => {
      state.generatedGreeting = action.payload;
    },
    saveToHistory: (state, action) => {
      state.history.push(action.payload)
    },
  },
});


export const {
  setGeneratedGreeting,
  saveToHistory,

} = generationSlice.actions;

export default generationSlice.reducer;