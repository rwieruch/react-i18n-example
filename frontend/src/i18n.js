import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
// import LocizeBackend from 'i18next-locize-backend';
// import LocizeEditor from 'locize-editor';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // .use(LocizeBackend)
  // .use(LocizeEditor)
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,

    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'de'],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // ** Integrated Webserver **

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}',
    },

    // ** Extract **

    // npm run extract
    // bug: <Trans></Trans> component not extracted
    // https://github.com/i18next/i18next-parser/issues/205

    // ** Custom Backend **

    // use frontend folder
    // saveMissing: true,
    // saveMissingTo: 'all',

    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    //   addPath: 'http://localhost:8000/locales/add/{{lng}}/{{ns}}',
    // },

    // ** Enterprise https://locize.com **

    // note: use LocizeBackend and LocizeEditor above
    // note: use API key and project ID from https://locize.com

    // saveMissing: true,
    // saveMissingTo: 'all',

    // backend: {
    //   projectId: 'xxx',
    //   apiKey: 'yyy',
    //   referenceLng: 'en',
    // },
  });

export default i18n;
