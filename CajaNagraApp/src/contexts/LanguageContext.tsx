import { I18n } from "i18n-js";
import { createContext, useContext, useState } from "react";
import { translation } from "../utils/translations/translation";

type Lenguage = "es" | "en";

type LenguageContextType = {
    language: Lenguage;
    changeLenguage: (lgn: Lenguage)=>void;
    clearLanguage: ()=>{};
}

const i18n = new I18n(translation);

i18n.defaultLocale = "es";
i18n.enableFallback = true;

const LanguageContext = createContext<LenguageContextType | null>(null);

export const LanguageProviver = ({children}: {children: React.ReactNode})=>{
    const [language, setLanguage] = useState<Lenguage>("es");
    
    const changeLenguage = (lng: Lenguage)=>{
        setLanguage(lng);
        //asignacion del idioma activo
        i18n.locale = lng;
    }

    const clearLanguage = ()=>{
        return "";
    }
    return(
        <LanguageContext.Provider value={{language, changeLenguage, clearLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLenguage = ()=>{
    const context = useContext(LanguageContext);
    if(!context) throw new Error("useLanguege debe utilizarse dentro del LenguageProviver");
    return context;
}