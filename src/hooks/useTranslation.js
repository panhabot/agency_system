import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'
import {
	defaultLanguage,
	supportedLanguages,
} from '../config'
	
i18n
	.use(detector)
	.use(Backend)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		supportedLngs: supportedLanguages.map(
			(lang) => lang.code,
		),
		fallbackLng: defaultLanguage,
		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false // react already safes from xss
		},
		react: {
			useSuspense: false
		},
		debug: process.env.NODE_ENV === 'development',
		detection: {
			order: ['queryString', 'cookie'],
			cache: ['cookie']
		}
	})

export const changeLanguage = (lng) => {
	i18n.changeLanguage(lng)
}



export default i18n

