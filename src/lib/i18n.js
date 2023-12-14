import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import ptTranslation from "../locale/pt.json";
import enTranslation from "../locale/en.json";
import esTranslation from "../locale/es.json";

i18n.use(initReactI18next).init({
    resources:{
        pt:{ ...ptTranslation },
        en:{ ...enTranslation },
        es:{ ...esTranslation },
    },
    lng:'pt'
})
export default i18n;