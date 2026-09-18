import React, { useContext } from "react";
import { createContext, useState } from "react";

type User = {
    email: string;
    authToken?: string;
    sessionToken?: string;
    role?: string;
} | null

type AuthContextType = {
    user: User | null;
    login: (email: string)=>boolean;
    logout:()=>{};
}

const AuthContext = createContext <AuthContextType | null>(null);

export const AuthProvider =({children}:{children: React.ReactNode})=>{
    const [user, setUser] = useState<User>(null);
    const login = (email: string): boolean=>{
        const isAllowed = email.endsWith('.edu');
        if(isAllowed){
            setUser({email});
        }
        return isAllowed;
    }
    const logout =()=>{
        return '';
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error ("useAuth debe ser utilizado dentro de AuthProvider");
    return context;
}
