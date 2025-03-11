import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const defaultLanguage = 'fr';
export const initialLanguage = localStorage.getItem('language') || defaultLanguage;

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
          'next': 'Next',
          'previous': 'Previous',
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
          'next': 'Suivant',
          'previous': 'Précédent',
          'projects': 'Projets',
          'restaurants': 'Restaurants',
          'reviews': 'Revues',
          'seeMore': 'Voir plus',
          'trips': 'Voyages',
        },
      },
    },
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export const setLanguage = (language: string) => {
  i18n.changeLanguage(language);
  localStorage.setItem('language', language);
}

export default {
  defaultLanguage,
  initialLanguage,
  setLanguage,
};
