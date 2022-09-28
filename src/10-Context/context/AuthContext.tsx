import React, {useContext, useState} from 'react'
import {createContext} from "react";

export type AuthState = {
    isLoggedIn:boolean;
    username?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false
}

export interface AuthContextProps{
    authState: AuthState;
    signIn:()=> void;
    signOut:()=> void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({children}:{children:JSX.Element}) => {
    const [authState, updateAuthState] = useState<AuthState>(authInitialState);
    const signIn = ()=> updateAuthState({...authState, isLoggedIn: true})
    const signOut = ()=> updateAuthState({...authState, isLoggedIn: false})

    return (
        <AuthContext.Provider value={{authState, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}
