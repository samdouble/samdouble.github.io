import { createSlice } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const defaultLanguage = 'fr';

const initialState = {
  language: localStorage.getItem('language') || defaultLanguage,
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'blog': 'Blog',
          'books': 'Books',
          'elsewhereInternet': 'Elsewhere on the Internet',
          'home': 'Home',
          'miscellaneous': 'Miscellaneous',
          'movies': 'Movies',
          'projects': 'Projects',
          'restaurants': 'Restaurants',
          'reviews': 'Reviews',
          'seeMore': 'See more',
          'trips': 'Trips',
        },
      },
      fr: {
        translation: {
          'blog': 'Blogue',
          'books': 'Livres',
          'elsewhereInternet': 'Ailleurs sur Internet',
          'home': 'Accueil',
          'miscellaneous': 'Autres',
          'movies': 'Films',
          'projects': 'Projets',
          'restaurants': 'Restaurants',
          'reviews': 'Revues',
          'seeMore': 'Voir plus',
          'trips': 'Voyages',
        },
      },
    },
    lng: initialState.language,
    fallbackLng: initialState.language,
    interpolation: {
      escapeValue: false,
    },
  });

const languagesSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action) {
      const { language } = action.payload;
      state.language = language;
      i18n.changeLanguage(language);
      localStorage.setItem('language', language);
    },
  },
});

export const { setLanguage } = languagesSlice.actions;

export default languagesSlice.reducer;
