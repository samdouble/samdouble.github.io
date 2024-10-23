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
          'bookReviews': 'Book Reviews',
          'elsewhereInternet': 'Elsewhere on the Internet',
          'home': 'Home',
          'miscellaneous': 'Miscellaneous',
          'movieReviews': 'Movie Reviews',
          'projects': 'Projects',
          'restaurantReviews': 'Restaurant Reviews',
          'seeMore': 'See more',
          'trips': 'Trips',
        },
      },
      fr: {
        translation: {
          'blog': 'Blogue',
          'bookReviews': 'Revues de livres',
          'elsewhereInternet': 'Ailleurs sur Internet',
          'home': 'Accueil',
          'miscellaneous': 'Autres',
          'movieReviews': 'Revues de films',
          'projects': 'Projets',
          'restaurantReviews': 'Revues de restaurants',
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

const todosSlice = createSlice({
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

export const { setLanguage } = todosSlice.actions;

export default todosSlice.reducer;
