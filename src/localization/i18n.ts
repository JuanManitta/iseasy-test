import { initReactI18next } from "react-i18next";

import translationEN from './en/translations.json';
import translationES from './es/translations.json';
import i18next from "i18next";



const resources = {
    es: translationES,
    en: translationEN
}


i18next.use(initReactI18next)
    .init({
        resources: resources,
        load: "languageOnly",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });
export default i18next;