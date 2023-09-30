import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uk',
    debug: _IS_DEV_,

    interpolation: {
      escapeValue: false
    },

    resources: { en: { translationsNS: {} } }
  })
  .then(resp => resp)
  .catch(error => {
    console.error(error)
  })

export default i18n
