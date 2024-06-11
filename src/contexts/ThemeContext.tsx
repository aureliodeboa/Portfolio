import { ThemeContextType } from "@/types/ThemeContextType";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const THEME_LOCAL_KEY="ThemeContextContent"; //local storage

export const ThemeContext = createContext<ThemeContextType | null> (null);


export const ThemeProvider = ({children}: {children: ReactNode})=>{
    const localstoragetemp = typeof window !== 'undefined' ? localStorage.getItem(THEME_LOCAL_KEY) : "dark" //isso tira um error que estava dando por causa do localStorage
    const [theme, setTheme]= useState('dark'); //coloca o tema dark como inicial
    
    useEffect(()=>{
        if(theme=='dark')
            {
                document.documentElement.classList.add('dark');
                
            }
            else{
                document.documentElement.classList.remove('dark');
            }
        localStorage.setItem(THEME_LOCAL_KEY,theme); //seta o tema no local storage
        
    },[theme])

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider> //retorna o provider
    )
}

export const useTheme= ()=> useContext(ThemeContext); //hook para ficar mais 