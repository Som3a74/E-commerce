"use client"
import { createContext, ReactNode, useContext, useEffect, useState, useLayoutEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from "universal-cookie";

interface TokenContextType {
    token: string | null;
    deCodedToken: {
        id: string;
        name: string;
        role: string;
        iat: number;
        exp: number;
    } | null;
    saveTokenHandel: (userToken: string) => void;
    getTokenHandel: () => void;
    clearTokenHandel: () => void;
}

interface TokenProviderProps {
    children: ReactNode;
}
const TokenContext = createContext<TokenContextType | any | undefined>(undefined);

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
    const cookies = new Cookies();

    const [token, settoken] = useState<string | null>(null);
    const [deCodedToken, setdeCodedToken] = useState<{} | null>(null);
    const [Storetoken, setStoretoken] = useState<string | null>(cookies.get('userToken'));

    // console.log(Storetoken)

    useLayoutEffect(() => {
        if (cookies.get('userToken')) {
            getTokenHandel();
            EnCodedTokenHandel();
        }
    }, []);

    function saveTokenHandel(userToken: string) {
        // Set cookie to expire in 7 days (1 week)
        const oneWeekFromNow = new Date();
        oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
        cookies.set('userToken', userToken, { path: '/', expires: oneWeekFromNow });

        settoken(userToken)
        setStoretoken(userToken)
        // decodeToken = jwtDecode(userToken);
    }

    function getTokenHandel() {
        // const userToken = localStorage.getItem('userToken');
        const userToken = cookies.get('userToken')
        settoken(userToken)
    }

    function EnCodedTokenHandel() {
        const userToken = cookies.get('userToken')
        let deuserToken = jwtDecode(userToken)
        setdeCodedToken(deuserToken)
    }


    function clearTokenHandel() {
        cookies.remove('userToken', { path: '/' });
        settoken(null)
        setStoretoken(null)
        // localStorage.removeItem('userToken')
    }

    return (
        <TokenContext.Provider value={{ token, Storetoken, deCodedToken, saveTokenHandel, getTokenHandel, clearTokenHandel }}>
            {children}
        </TokenContext.Provider>
    );
};

export function useToken() {
    return useContext(TokenContext);
}