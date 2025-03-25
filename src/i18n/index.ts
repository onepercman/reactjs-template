import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to ReactJS Template",
          about: "About",
          home: "Home",
        },
      },
      vi: {
        translation: {
          welcome: "Chào mừng đến với ReactJS Template",
          about: "Giới thiệu",
          home: "Trang chủ",
        },
      },
    },
  })

export default i18n
