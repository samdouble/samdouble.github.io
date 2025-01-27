import { configureStore } from '@reduxjs/toolkit';
import language from 'services/language';

const store = configureStore({
  reducer: {
    language,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
