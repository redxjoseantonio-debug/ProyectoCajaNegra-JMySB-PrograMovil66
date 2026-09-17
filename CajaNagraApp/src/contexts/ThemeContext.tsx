import { createContext, useContext, useState } from 'react';
import React from 'react';

type Theme = {
    background: string;
    text: string;
    card: string;
    tabBar: string;
}

type ThemeContextType = {
    isDark: boolean;
    theme: Theme;
    toggleTheme: ()=> void;}; 

const lightTheme: Theme = {
    background: '#FFFFFF',
    text:'#000000',
    card: '#F2F2F2',
    tabBar: '#FFFFFF',
};

const darkTheme: Theme = {
    background: '#121212',
    text: '#FFFFFF',
    card: '#1E1E1E',
    tabBar: '#1E1E1E',
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider =({children}:{children: React.ReactNode}) =>{
    const [isDark, SetIsDark] = useState(false);

    const toggleTheme = () => {
        SetIsDark(!isDark);
    };

    const theme = isDark ? darkTheme : lightTheme;

    return(
        <ThemeContext.Provider value={{isDark, theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme =() =>{
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error ("useTheme debe usarse dentro de ThemeProvider")
    }
    return context;
}
