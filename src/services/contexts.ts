import { createContext } from 'react';
import { initialLanguage } from './language';

export const LanguageContext = createContext<string>(initialLanguage);

export default {
  LanguageContext,
};
