import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import enTranslation from '../locales/en.json';
import ptTranslation from '../locales/pt.json';
import { debug } from 'console';

const resources = {
    en:{
        translation: enTranslation,
    },
    pt:{
        translation: ptTranslation,
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        debug:true,
        lng: 'pt',
        fallbackLng: 'en',//caso o idioma padrao não esteja disponivel
        interpolation:{
            escapeValue: false, //permitir que oce use código HTML em suas traduções
        },
        
    });
export default i18n;