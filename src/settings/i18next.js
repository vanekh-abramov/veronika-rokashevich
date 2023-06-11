import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', // язык по умолчанию
    debug: false, // спамить ли в консоли всякие действия, связанные с переводами

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;