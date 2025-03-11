import { createContext } from 'react';
import { defaultLanguage } from './language';

export const LanguageContext = createContext<string>(defaultLanguage);

export default {
  LanguageContext,
};
