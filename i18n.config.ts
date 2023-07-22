import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from './src/modules/common/locale/es.json'
import en from './src/modules/common/locale/en.json'
i18n.use(initReactI18next).init({
 resources: {
  es,
  en 
 }, 
 lng: "es", 
 fallbackLng: 'es',
});