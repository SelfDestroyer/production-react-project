import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    lng: 'uk',
    fallbackLng: 'uk',
    debug: false,

    interpolation: {
      escapeValue: false
    },

    resources: { uk: { translationsNS: {} } }
  })
  .then(resp => resp)
  .catch(error => {
    console.error(error)
  })

export default i18n
