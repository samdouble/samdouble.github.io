import { createSlice } from '@reduxjs/toolkit';

export const defaultLanguage = 'fr';

const initialState = {
  language: localStorage.getItem('language') || defaultLanguage,
};

const todosSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action) {
      const { language } = action.payload;
      state.language = language;
      localStorage.setItem('language', language);
    },
  },
});

export const { setLanguage } = todosSlice.actions;

export default todosSlice.reducer;
